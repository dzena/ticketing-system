import { createReducer, on } from '@ngrx/store';
import { Ticket } from '../../../models/ticket.model';
import * as actions from '../actions/tickets.actions';

export const ticketsKey = 'tickets';

export interface State {
    tickets: Ticket[];
    selectedTicketId: string,
}

export const initialState: State = {
    tickets: [],
    selectedTicketId: null
}

export const reducer = createReducer(
    initialState,
    on( actions.loadTicketsSuccess, ( state, { tickets } ) => ({ tickets }) ),
    on( actions.updateTicketStatusSuccess, ( state, { ticket } ) => {
        const index = state.tickets.findIndex( t => t.id === ticket.id );
        const tickets = Object.assign( [], state.tickets, { [ index ]: ticket } );
        return { ...state, tickets };
    } ),
    on( actions.addTicketSuccess, ( state, { ticket } ) => (
        { ...state, tickets: [ticket, ...state.tickets] }
    ) )
)

export const tickets = ( { tickets }: State ) => tickets;
export const selectedTickedId = ( { selectedTicketId }: State ) => selectedTicketId;
