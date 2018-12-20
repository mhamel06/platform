import { Book } from '@example-app/books/models/book';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum BookActionTypes {
  LoadBook = '[Book Exists Guard] Load Book',
}
export const Actions = {
  loadBook: (payload: Book) => createAction(BookActionTypes.LoadBook, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
