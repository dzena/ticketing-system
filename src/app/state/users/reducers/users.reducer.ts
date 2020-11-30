import { User } from '../../../models/user.model';
import { createReducer } from '@ngrx/store';

export const usersKey = 'users';

export interface State {
    users: User[];
    selectedUserId: string
}

const initialState: State = {
    users: [],
    selectedUserId: null
}

export const reducer = createReducer(
    initialState
)
