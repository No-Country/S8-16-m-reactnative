export interface Genre {
    name: string;
    [key: string]: string | boolean;
}

export interface Chat {
    user: string,
    min: string,
    id: string,
    image: string,
    online: boolean,
    [key: string]: string | boolean;
}

export interface SearchableData {
    [key: string]: string | boolean;
}