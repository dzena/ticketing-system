import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule( {
    declarations: [],
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule
    ]
} )
export class MaterialModule {
}
