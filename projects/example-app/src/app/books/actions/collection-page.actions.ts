import {
  ActionsUnion,
  createAction,
} from '@example-app/shared/models/actions.model';

export enum CollectionPageActionTypes {
  LoadCollection = '[Collection Page] Load Collection',
}

export const Actions = {
  /**
   * Load Collection Action
   */
  loadCollection: () => createAction(CollectionPageActionTypes.LoadCollection),
};

export type Actions = ActionsUnion<typeof Actions>;
