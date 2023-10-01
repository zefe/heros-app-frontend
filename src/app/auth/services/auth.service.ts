import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { envioronments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, of, tap, map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

    private baseUrl = envioronments.baseUrl;
    private user?: User;

    constructor(private http: HttpClient) { }

    get currentUser(): User|undefined {
        if( !this.user ) return undefined;

        return structuredClone( this.user ); // {...user}
    }

    login( email: string, password: string): Observable<User> {
        
        // http,post('login', {email, password})

        return this.http.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap( user => { this.user = user; }),
                tap( user => localStorage.setItem('token', user.id.toString())),
            );   
    }

    //verificar hay usuario autenticado
    checkAuthentication(): Observable<boolean>  {
        if( !localStorage.getItem('token')) return of(false);

        const token = localStorage.getItem('token');

        return this.http.get<User>(`${ this.baseUrl }/users/1`)
            .pipe(
                tap( user => this.user = user),
                map( user => !!user ), //regresa true porque si el usuario existe
                catchError(err => of(false))
            )
    }

    logout() {
        this.user = undefined;
        localStorage.clear()
    }
    
}