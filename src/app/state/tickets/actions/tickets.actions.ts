import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../../models/ticket.model';

/**
 * Load tickets
 */
export const loadTickets = createAction( '[Tickets] Load Tickets' );

export const loadTicketsSuccess = createAction(
    '[Tickets] Load Tickets Success',
    props<{ tickets: Ticket[] }>()
);

/**
 * Create ticket
 */
export const addTicket = createAction(
    '[Tickets] Add Ticket',
    props<{ description: string }>()
);

export const addTicketSuccess = createAction(
    '[Tickets] Add Ticket Success',
    props<{ ticket: Ticket }>()
);

/**
 * Update ticket
 */
export const updateTicketStatus = createAction(
    '[Tickets] Update Ticket Status',
    props<{ id: number, status: boolean }>()
);

export const updateTicketStatusSuccess = createAction(
    '[Tickets] Update Ticket Status Success',
    props<{ ticket: Ticket }>()
);


/**
 * Errors, serves just to proxy an error (not stored in the state)
 */
export const catchError = createAction(
    '[Tickets] Catch Error',
    props<{ error: string }>()
)
