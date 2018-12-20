export interface Action<T extends string> {
  type: T;
}
export interface ActionPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

type FunctionsType = (...args: any[]) => any;

type ActionCreatorsMapObject = { [actionsCreator: string]: FunctionsType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
