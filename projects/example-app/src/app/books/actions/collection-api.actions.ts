import { Book } from '@example-app/books/models/book';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum CollectionApiActionTypes {
  AddBookSuccess = '[Collection/API] Add Book Success',
  AddBookFailure = '[Collection/API] Add Book Failure',
  RemoveBookSuccess = '[Collection/API] Remove Book Success',
  RemoveBookFailure = '[Collection/API] Remove Book Failure',
  LoadBooksSuccess = '[Collection/API] Load Books Success',
  LoadBooksFailure = '[Collection/API] Load Books Failure',
}

export const Actions = {
  /**
   * Add Book to Collection Actions
   */
  addBookSuccess: (payload: Book) =>
    createAction(CollectionApiActionTypes.AddBookSuccess, payload),
  addBookFailure: (payload: Book) =>
    createAction(CollectionApiActionTypes.AddBookFailure, payload),

  /**
   * Remove Book from Collection Actions
   */
  removeBookSuccess: (payload: Book) =>
    createAction(CollectionApiActionTypes.RemoveBookSuccess, payload),
  removeBookFailure: (payload: Book) =>
    createAction(CollectionApiActionTypes.RemoveBookFailure, payload),

  /**
   * Load Collection Actions
   */
  loadBooksSuccess: (payload: Book[]) =>
    createAction(CollectionApiActionTypes.LoadBooksSuccess, payload),
  loadBooksFailure: (payload: any) =>
    createAction(CollectionApiActionTypes.LoadBooksFailure, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
