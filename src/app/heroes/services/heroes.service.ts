import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { envioronments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl: string = envioronments.baseUrl;

    constructor(private http: HttpClient) { }
    //Lista de heroes
    getHeroes():Observable<Hero[]> {
        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
    }

    //detalles de heroe
    getHeroById( id: string):Observable<Hero|undefined> {
        return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
        .pipe(
            catchError( error => of(undefined) )
        )
    }

    //buscar heroe - autocomplete
    getSuggestions( query: string ): Observable<Hero[]>{
        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&limit=6`);
    }

    //nuevo heroe
    addHero( hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(`${ this.baseUrl }/heroes`, hero);
    }

     //actualizar heroe
     updateHero( hero: Hero): Observable<Hero> {
        if( !hero.id ) throw Error('Hero id is required');
        return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${hero.id}`, hero);
    }

     //eliminar heroe
     deleteHeroById( id: string): Observable<boolean> {
        return this.http.delete(`${ this.baseUrl }/heroes/${ id }`)
            .pipe(
                map( resp => true),
                catchError( err => of(false)),
            )

    }

    
}