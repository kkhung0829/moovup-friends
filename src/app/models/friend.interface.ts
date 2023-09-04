export interface IFriend {
    _id: string;
    name: {
        last: string;
        first: string;
    }
    email: string;
    picture: string;
    location: {
        latitude: number;
        longitude: number;
    }
}
