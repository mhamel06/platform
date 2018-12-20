import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum FindBookPageActionTypes {
  SearchBooks = '[Find Book Page] Search Books',
}

export const Actions = {
  searchBooks: (payload: string) =>
    createAction(FindBookPageActionTypes.SearchBooks, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
