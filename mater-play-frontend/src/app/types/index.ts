export interface ICategory {
    id?: number;
    name: string;
    active: boolean;
}
export interface IGenre {
    id?: string;
    name: string;
}
export interface IMovie {
    id?: string;
    title: string;
    description: string;
    poster: string;
    ageRating: string;
    categroy: ICategory[];
    genres: IGenre[];
}
