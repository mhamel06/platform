import { User } from '@example-app/auth/models/user';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

// With Action Types Enum
export enum AuthApiActionTypes {
  LoginSuccess = '[Auth/API] Login Success',
  LoginFailure = '[Auth/API] Login Failure',
  LoginRedirect = '[Auth/API] Login Redirect',
}

export const Actions = {
  loginSuccess: (payload: { user: User }) =>
    createAction(AuthApiActionTypes.LoginSuccess, payload),
  loginFailure: (payload: { error: any }) =>
    createAction(AuthApiActionTypes.LoginFailure, payload),
  loginRedirect: () => createAction(AuthApiActionTypes.LoginRedirect),
};
export type Actions = ActionsUnion<typeof Actions>;
