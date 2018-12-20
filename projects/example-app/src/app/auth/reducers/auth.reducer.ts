import { AuthApiActions, AuthActions } from '@example-app/auth/actions';
import { User } from '@example-app/auth/models/user';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export function reducer(
  state = initialState,
  action: AuthApiActions.Actions | AuthActions.Actions
): State {
  switch (action.type) {
    case AuthApiActions.AuthApiActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case AuthActions.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUser = (state: State) => state.user;
