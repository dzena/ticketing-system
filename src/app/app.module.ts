import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreModule.forRoot( reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true
            }
        } ),
        EffectsModule.forRoot( [] ),
        CoreModule,
        MatSidenavModule
    ],
    bootstrap: [AppComponent]
} )
export class AppModule {

}
