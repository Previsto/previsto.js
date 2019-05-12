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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': this.apiKey,
                'X-2FA-Token': twoFaToken
            },
            method: 'POST',
            body: JSON.stringify(contact)
        }).then(res => res.json())
            .then(res => res.map((contact: IContact) => contact));
    }

    public async createAgreement(agreement: IAgreement, twoFaToken: string): Promise<IAgreement> {
        return fetch(`${this.serviceUrl}/agreements`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': this.apiKey,
                'X-2FA-Token': twoFaToken
            },
            method: 'POST',
            body: JSON.stringify(agreement)
        }).then(res => res.json())
            .then(res => res.map((contact: IAgreement) => contact));
    }

    public async requestTwoFaToken(phone: string) {
        return fetch(`${this.serviceUrl}/accounts/actions/sendTwoFactorToken`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': this.apiKey
            },
            method: 'POST',
            body: JSON.stringify({phone:phone})
        }).then(res => res.json());
    }

    public async searchAddress(query: string): Promise<IAddress[]> {
        return [];
    }
}

export const previsto = new Previsto();
