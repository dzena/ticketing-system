import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class ExceptionsService {

    constructor( private _snackBar: MatSnackBar ) {}

    public catchBadResponse: ( { error } ) => Observable<boolean> = ( { error } ) => {
        this._snackBar.open( error, null, { duration: 2000 } )
        return of( false );
    }
}
