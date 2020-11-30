import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTickets from '../reducers/tickets.reducer'

export interface TicketsState extends fromTickets.State {
}

const selectTicketsState = createFeatureSelector<fromTickets.State>( fromTickets.ticketsKey );

export const selectTickets = createSelector(
    selectTicketsState,
    fromTickets.tickets
);
