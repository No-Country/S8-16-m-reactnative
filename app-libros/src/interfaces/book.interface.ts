export interface Book {
    uid?: string;
    title: string;
    description: string;
    image: string;
    available: boolean;
    userId: string;
    userName: string;
    userImage?: string;
    status: string;
    type: string;
    genre: string;
}