import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromTickets from './reducers/tickets.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TicketsEffects } from './effects/tickets.effects';

@NgModule( {
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature( fromTickets.ticketsKey, fromTickets.reducer ),
        EffectsModule.forFeature( [TicketsEffects] )
    ]
} )
export class TicketsStateModule {
}
