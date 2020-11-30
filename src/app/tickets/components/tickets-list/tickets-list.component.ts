import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';

@Component( {
    selector: 'app-tickets-list',
    templateUrl: './tickets-list.component.html',
    styleUrls: ['./tickets-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class TicketsListComponent implements OnInit {
    @Input() tickets: Ticket[];
    @Output() statusChanged = new EventEmitter<{ id: number, status: boolean }>()
    @Output() submitChanged = new EventEmitter<{ description: string }>()

    public addNew = false;

    constructor() { }

    ngOnInit(): void {
    }

}
