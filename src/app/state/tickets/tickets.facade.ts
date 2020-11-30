import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket.model';
import { Store } from '@ngrx/store';
import { selectTickets, TicketsState } from './selectors/tickets.selectors';
import * as fromActions from './actions/tickets.actions';

@Injectable( { providedIn: 'root' } )
export class TicketsFacade {
    public tickets$: Observable<Ticket[]> = this._store.select( selectTickets );

    constructor( private _store: Store<TicketsState> ) {}

    public getTickets(): void {
        this._store.dispatch( fromActions.loadTickets() );
    }

    public updateTicketStatus( id: number, status: boolean ): void {
        this._store.dispatch( fromActions.updateTicketStatus( { id, status } ) );
    }

    public addTicket( description: string ): void {
        this._store.dispatch( fromActions.addTicket( { description } ) );
    }
}
