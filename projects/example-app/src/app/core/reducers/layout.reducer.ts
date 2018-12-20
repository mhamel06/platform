import { LayoutActions } from '@example-app/core/actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(
  state: State = initialState,
  action: LayoutActions.Actions
): State {
  switch (action.type) {
    case LayoutActions.CLOSE_SIDENAV:
      return {
        showSidenav: false,
      };

    case LayoutActions.OPEN_SIDENAV:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
