export interface IAddress {
    city: string;
    flat: number;
}

export interface IUser {
    id: number;
    name: string;
    age: number;
    address: IAddress;
}
