export interface ContactStruct {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    info: {
        avatar: string,
        company: string,
        address: string,
        phone: string,
        comments: string
    };
    isFavorite: boolean;
    id: string;
}
