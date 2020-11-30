import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../api/users/users.service';

@Component( {
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class UsersPageComponent implements OnInit {
    public users$: Observable<User[]> = this._usersService.getUsers();

    constructor( private _usersService: UsersService ) { }

    ngOnInit(): void {
    }

}
