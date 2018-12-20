import {
  createAction,
  ActionsUnion,
} from '@example-app/shared/models/actions.model';

export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const openSidenav = () => createAction(OPEN_SIDENAV);

export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const closeSidenav = () => createAction(CLOSE_SIDENAV);

export const Actions = {
  openSidenav,
  closeSidenav,
};

export type Actions = ActionsUnion<typeof Actions>;
