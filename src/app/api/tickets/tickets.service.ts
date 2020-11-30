import { Injectable } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket.model';

@Injectable( {
    providedIn: 'root'
} )
export class TicketsService {
    constructor( private _backend: BackendService ) {}

    public getTickets(): Observable<Ticket[]> {
        return this._backend.tickets();
    }

    public updateTicketStatus( id: number, status: boolean ): Observable<Ticket> {
        return this._backend.complete( id, status );
    }

    public addTicket( description: string ): Observable<Ticket> {
        return this._backend.newTicket( { description } );
    }
}
