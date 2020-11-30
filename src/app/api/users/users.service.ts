import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { BackendService } from '../../backend.service';

@Injectable( {
    providedIn: 'root'
} )
export class UsersService {

    constructor( private _backend: BackendService ) { }

    public getUsers(): Observable<User[]> {
        return this._backend.users();
    }
}
