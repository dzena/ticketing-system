import { RouterModule, Routes } from '@angular/router';
import { TicketsPageComponent } from './containers/tickets-page/tickets-page.component';
import { NgModule } from '@angular/core';
import { TicketComponent } from './components/ticket/ticket.component';

export const routes: Routes = [
    {
        path: '',
        component: TicketsPageComponent
    },
    {
        path: ':id',
        component: TicketComponent
    }
]

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class TicketsRoutingModule {
}
