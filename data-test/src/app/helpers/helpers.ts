import { Film } from "../interfaces/film";

export function formatFilmList(list: any): Film[] {
    return list.map((film: any) => {
        return {
            id: film['id'] || '',
            title: film['title'] || '',
            year: film['year'] || '--',
            imDbRating: film['imDbRating'] || ''
        }
    });
}

export function trackByFilmId(_: any, film: Film): string {
    return film.id;
}