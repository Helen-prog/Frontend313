export interface IUser{
    id: number;
    name: string;
    address: IAddress;
}

export interface IAddress{
    street: string;
    city: string;
}

export interface ITodo{
    id: number;
    title: string;
    completed: boolean;
}