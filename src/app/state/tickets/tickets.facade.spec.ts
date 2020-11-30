import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { TicketsFacade } from './tickets.facade';
import { NgModule } from '@angular/core';
import { initialState, reducer, ticketsKey } from './reducers/tickets.reducer';
import { TicketsEffects } from './effects/tickets.effects';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket.model';
import { loadTicketsSuccess } from './actions/tickets.actions';

function readFirst<T>( o: Observable<T> ): Promise<T> {
    return o.pipe( first() ).toPromise();
}

describe( 'TicketsFacade', () => {
    let facade: TicketsFacade;
    let store: Store;
    const ticket: Ticket = { id: 1, completed: false, assigneeId: 11, description: 'd' };

    describe( 'used in NgModule', async () => {

        beforeEach( () => {
            @NgModule( {
                imports: [
                    StoreModule.forFeature( ticketsKey, reducer, { initialState } ),
                    EffectsModule.forFeature( [TicketsEffects] )
                ],
                providers: [TicketsFacade]
            } )
            class CustomFeatureModule {
            }

            @NgModule( {
                imports: [
                    StoreModule.forRoot( {} ),
                    EffectsModule.forRoot( [] ),
                    CustomFeatureModule
                ]
            } )
            class RootModule {
            }

            TestBed.configureTestingModule( { imports: [RootModule] } );

            store = TestBed.inject( Store );
            facade = TestBed.inject( TicketsFacade );
        } );

        it( 'getTickets() should return empty list', async ( done ) => {
            try {
                let list = await readFirst( facade.tickets$ );

                expect( list.length ).toBe( 0 );    // initially empty

                facade.getTickets();

                list = await readFirst( facade.tickets$ );

                expect( list.length ).toBe( 0 );

                done();
            } catch ( err ) {
                done.fail( err );
            }
        } );

        it( 'tickets$ should return the current list', async ( done ) => {
            try {
                let list = await readFirst( facade.tickets$ );

                expect( list.length ).toBe( 0 );

                // Here we are testing our actions, reducers, and selectors.
                // Simulate results of a getTickets() and add a ticket to the state.

                store.dispatch( loadTicketsSuccess( { tickets: [ticket] } ) );

                list = await readFirst( facade.tickets$ );

                expect( list.length ).toBe( 1 );

                done();
            } catch ( err ) {
                done.fail( err );
            }
        } );
    } );

} );
