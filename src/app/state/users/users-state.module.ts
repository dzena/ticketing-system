import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from './reducers/users.reducer'
import { UsersEffects } from './effects/users.effects';

@NgModule( {
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature( fromUsers.usersKey, fromUsers.reducer ),
        EffectsModule.forFeature( [UsersEffects] )
    ]
} )
export class UsersStateModule {
}
