import { Book } from '@example-app/books/models/book';
import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum BooksApiActionTypes {
  SearchSuccess = '[Books/API] Search Success',
  SearchFailure = '[Books/API] Search Failure',
}

export const Actions = {
  searchSuccess: (payload: Book[]) =>
    createAction(BooksApiActionTypes.SearchSuccess, payload),
  searchFailure: (payload: string) =>
    createAction(BooksApiActionTypes.SearchFailure, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
