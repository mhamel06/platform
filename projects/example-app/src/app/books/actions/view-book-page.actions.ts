import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum ViewBookPageActionTypes {
  SelectBook = '[View Book Page] Select Book',
}

export const Actions = {
  selectBook: (payload: string) =>
    createAction(ViewBookPageActionTypes.SelectBook, payload),
};

export type Actions = ActionsUnion<typeof Actions>;
