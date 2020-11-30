import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsPageComponent } from './containers/tickets-page/tickets-page.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { MaterialModule } from '../material/material.module';
import { TicketsStateModule } from '../state/tickets/tickets-state.module';
import { FormsModule } from '@angular/forms';


@NgModule( {
    declarations: [TicketsPageComponent, TicketsListComponent, TicketComponent],
    imports: [
        CommonModule,
        FormsModule,
        TicketsRoutingModule,
        TicketsStateModule,
        MaterialModule
    ]
} )
export class TicketsModule {
}
