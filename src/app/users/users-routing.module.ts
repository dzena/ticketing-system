import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path: '',
        component: UsersPageComponent
    },
    {
        path: ':id',
        component: UserComponent
    }
]

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class UsersRoutingModule {
}
