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
  public async createContact(contact: IContact, twoFaToken?: string): Promise<IContact> {
    return {
      id: '',
    };
  }

  public async createAgreement(agreement: IAgreement, twoFaToken?: string): Promise<IAgreement> {
    return {
      id: '',
    };
  }

  public async requestTwoFaToken(phone: string) {
    console.log('Requests token');
  }

  public async searchAddress(query: string): Promise<IAddress[]> {
    return [];
  }
}

export const previsto = new Previsto();
