import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';

@Component( {
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class UsersListComponent implements OnInit {
    @Input() users: User[];

    constructor() { }

    ngOnInit(): void {
    }

}
