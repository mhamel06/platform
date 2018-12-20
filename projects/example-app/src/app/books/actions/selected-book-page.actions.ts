import { Book } from '@example-app/books/models/book';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum SelectedBookPageActionTypes {
  AddBook = '[Selected Book Page] Add Book',
  RemoveBook = '[Selected Book Page] Remove Book',
}

export const Actions = {
  addBook: (payload: Book) =>
    createAction(SelectedBookPageActionTypes.AddBook, payload),
  removeBook: (payload: Book) =>
    createAction(SelectedBookPageActionTypes.RemoveBook, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
