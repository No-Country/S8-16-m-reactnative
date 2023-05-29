export interface Genre {
    id: string;
    name: string;
    image: string;
    icon: string;
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