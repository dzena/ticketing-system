import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule( {
    declarations: [
        UsersPageComponent,
        UsersListComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MaterialModule
    ]
} )
export class UsersModule {
}
