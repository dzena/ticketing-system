import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'tickets', pathMatch: 'full' },
    {
        path: 'tickets',
        loadChildren: () => import('./tickets/tickets.module').then( m => m.TicketsModule )
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( m => m.UsersModule )
    }
]

@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {
}
