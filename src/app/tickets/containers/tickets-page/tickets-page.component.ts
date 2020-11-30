import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TicketsFacade } from '../../../state/tickets/tickets.facade';
import { Ticket } from '../../../models/ticket.model';

@Component( {
    selector: 'app-tickets-page',
    templateUrl: './tickets-page.component.html',
    styleUrls: ['./tickets-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class TicketsPageComponent implements OnInit {
    public tickets$: Observable<Ticket[]> = this._ticketsFacade.tickets$;

    constructor( private _ticketsFacade: TicketsFacade ) { }

    ngOnInit(): void {
        this._ticketsFacade.getTickets();
    }

    public onTicketStatusChange( { id, status } ): void {
        this._ticketsFacade.updateTicketStatus( id, status );
    }

    public onAddTicketChange( { description } ): void {
        console.warn( description )
        this._ticketsFacade.addTicket( description );
    }

}
