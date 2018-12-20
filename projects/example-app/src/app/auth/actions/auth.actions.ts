import {
  createAction,
  ActionsUnion,
} from '@example-app/shared/models/actions.model';

// Using Action Types as Consts
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_CONFIRMATION = '[Auth] Logout Confirmation';
export const LOGOUT_CONFIRMATION_DISMISS = '[Auth] Logout Confirmation Dismiss';

export const Actions = {
  logout: () => createAction(LOGOUT),
  logoutConfirmation: () => createAction(LOGOUT_CONFIRMATION),
  logoutConfirmationDismiss: () => createAction(LOGOUT_CONFIRMATION_DISMISS),
};

export type Actions = ActionsUnion<typeof Actions>;
