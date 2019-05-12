
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

    async createContact(contact: IContact, twoFaToken?: string): Promise<IContact> {
        return {
            id: ''
        };
    }

    async createAgreement(agreement: IAgreement, twoFaToken?: string): Promise<IAgreement> {
        return {
            id: ''
        };
    }

    async requestTwoFaToken(phone: string) {

    }

    async searchAddress(query: string): Promise<IAddress[]> {
        return [];
    }
}

export const previsto = new Previsto();
