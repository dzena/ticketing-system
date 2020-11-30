import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ticketActions from '../actions/tickets.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TicketsService } from '../../../api/tickets/tickets.service';
import { Ticket } from '../../../models/ticket.model';
import { of } from 'rxjs';
import { ExceptionsService } from '../../../core/exceptions/exceptions.service';

@Injectable()
export class TicketsEffects {
    loadTickets$ = createEffect( () =>
        this._actions$
            .pipe(
                ofType( ticketActions.loadTickets ),
                switchMap( () =>
                    this._ticketsService.getTickets()
                        .pipe(
                            map( ( tickets: Ticket[] ) => ticketActions.loadTicketsSuccess( { tickets } ) ),
                            catchError( error => of( ticketActions.catchError( { error: error.message } ) ) )
                        )
                )
            )
    )

    updateTicketStatus$ = createEffect( () =>
        this._actions$
            .pipe(
                ofType( ticketActions.updateTicketStatus ),
                switchMap( ( { id, status } ) =>
                    this._ticketsService.updateTicketStatus( id, status )
                        .pipe(
                            map( ( ticket: Ticket ) =>
                                ticketActions.updateTicketStatusSuccess( { ticket } )
                            ),
                            catchError( error => of( ticketActions.catchError( { error: error.message } ) ) )
                        )
                )
            )
    )

    addTicket$ = createEffect( () =>
        this._actions$
            .pipe(
                ofType( ticketActions.addTicket ),
                switchMap( ( { description } ) =>
                    this._ticketsService.addTicket( description )
                        .pipe(
                            map( ( ticket: Ticket ) =>
                                ticketActions.addTicketSuccess( { ticket } )
                            ),
                            catchError( error => of( ticketActions.catchError( { error: error.message } ) ) )
                        )
                )
            )
    )

    catchError$ = createEffect( () =>
        this._actions$
            .pipe(
                ofType( ticketActions.catchError ),
                map( this._exceptionsService.catchBadResponse )
            ), { dispatch: false }
    )

    constructor( private _actions$: Actions,
                 private _ticketsService: TicketsService,
                 private _exceptionsService: ExceptionsService ) {}
}
