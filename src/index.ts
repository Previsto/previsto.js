interface IContact {
  id: string;
}

interface IAgreement {
  id: string;
}

interface IAddress {
  city: string;
  countryCode: string;
  houseNumber: string;
  latitude: string;
  longitude: string;
  postalCode: string;
  street: string;
  village: string;
}

class Previsto {
  public apiKey: string = '';
  private serviceUrl = 'https://api.previsto.io';

  public async createContact(contact: IContact, twoFaToken: string): Promise<IContact> {
    return fetch(`${this.serviceUrl}/contacts`, {
      body: JSON.stringify(contact),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-2FA-Token': twoFaToken,
        'X-Auth-Token': this.apiKey,
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => res.map((result: IContact) => result));
  }

  public async createAgreement(agreement: IAgreement, twoFaToken: string): Promise<IAgreement> {
    return fetch(`${this.serviceUrl}/agreements`, {
      body: JSON.stringify(agreement),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-2FA-Token': twoFaToken,
        'X-Auth-Token': this.apiKey,
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => res.map((result: IAgreement) => result));
  }

  public async requestTwoFaToken(phone: string) {
    return fetch(`${this.serviceUrl}/accounts/actions/sendTwoFactorToken`, {
      body: JSON.stringify({ phone }),
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': this.apiKey,
      },
      method: 'POST',
    }).then(res => res.json());
  }

  public async searchAddress(query: string, countryCode: string): Promise<IAddress[]> {
    return fetch(`${this.serviceUrl}/addresses?preferredCountryCode=${countryCode}&q=${encodeURIComponent(query)}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': this.apiKey,
      },
    })
      .then(res => res.json())
      .then(res => res.map((result: IAddress[]) => result));
  }
}

export const previsto = new Previsto();
