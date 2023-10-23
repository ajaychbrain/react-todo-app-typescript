export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dummyData : IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Dummy1",
        lastName: "Dummy11",
        email: "dumm1@gmail.com",
    }
]

export enum PageEnum {
    list,
    add,
}