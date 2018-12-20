import { Credentials } from '@example-app/auth/models/user';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export const LOGIN = '[Login Page] Login';
export const Actions = {
  login: (payload: { credentials: Credentials }) =>
    createAction(LOGIN, payload),
};
export type Actions = ActionsUnion<typeof Actions>;
