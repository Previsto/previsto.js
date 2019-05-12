
interface IContact {

}

interface IAgreement {

}

interface IAddress {

}

class Previsto {

    async createContact(contact: IContact, twoFaToken?: string): Promise<IContact> {
        return {};
    }

    async createAgreement(agreement: IAgreement, twoFaToken?: string): Promise<IAgreement> {
        return {};
    }

    async requestTwoFaToken(phone: string) {

    }

    async searchAddress(query: string): Promise<IAddress[]> {
        return [];
    }
}

export const previsto = new Previsto();
