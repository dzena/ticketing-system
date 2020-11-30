import { reducer, initialState } from './tickets.reducer';
import { addTicketSuccess } from '../actions/tickets.actions';
import { Ticket } from '../../../models/ticket.model';

describe( 'Tickets reducer', () => {
    describe( 'default', () => {
        it( 'should return init state', () => {
            const action = { type: 'NOOP' } as any;
            const result = reducer( undefined, action );

            expect( result ).toBe( initialState );
        } )
    } )
} )

describe( '[Ticket] Add Ticket Success', () => {
    it( 'should add new ticket to the state', () => {
        const ticket: Ticket = { id: 1, completed: false, assigneeId: 11, description: 'd' };
        const action = addTicketSuccess( { ticket } );
        const result = reducer( initialState, action );

        expect( result ).toEqual( {
            ...initialState,
            tickets: [ticket]
        } )
    } );
} )
