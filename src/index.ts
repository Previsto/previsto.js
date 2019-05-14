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

interface IOptions {
  serviceUrl: string;
}

class Previsto {
  constructor(public apiKey: string, private options = { serviceUrl: 'https://api.previsto.io' }) {}

  public async createContact(contact: IContact, twoFaToken: string): Promise<IContact> {
    return fetch(`${this.options.serviceUrl}/contacts`, {
      body: JSON.stringify(contact),
      headers: {
        Accept: 'application/json',
        Authorization: this.basicAuth(),
        'Content-Type': 'application/json',
        'X-2FA-Token': twoFaToken,
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => res.map((result: IContact) => result));
  }

  public async createAgreement(agreement: IAgreement, twoFaToken: string): Promise<IAgreement> {
    return fetch(`${this.options.serviceUrl}/agreements`, {
      body: JSON.stringify(agreement),
      headers: {
        Accept: 'application/json',
        Authorization: this.basicAuth(),
        'Content-Type': 'application/json',
        'X-2FA-Token': twoFaToken,
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(res => res.map((result: IAgreement) => result));
  }

  public async requestTwoFaToken(phone: string) {
    return fetch(`${this.options.serviceUrl}/accounts/actions/sendTwoFactorToken`, {
      body: JSON.stringify({ phone }),
      headers: {
        Authorization: this.basicAuth(),
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(res => res.json());
  }

  public async searchAddress(query: string, countryCode: string): Promise<IAddress[]> {
    return fetch(
      `${this.options.serviceUrl}/addresses?preferredCountryCode=${countryCode}&q=${encodeURIComponent(query)}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: this.basicAuth(),
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => res.json())
      .then(res => res.map((result: IAddress[]) => result));
  }

  private basicAuth() {
    return `Basic ${btoa(this.apiKey + ':')}`;
  }
}
