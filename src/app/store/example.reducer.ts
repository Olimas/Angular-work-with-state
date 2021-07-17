import {ExampleActions} from "./example.actions";
import {Action, createReducer, on} from "@ngrx/store";

export interface State {
  count: number,
  message?: string,
}

const initialState: State = {
  count: 10,
};

const exampleReducer = createReducer(
  initialState,
  on(ExampleActions.increaseCount, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(ExampleActions.sendMessage, (state, {message}) => ({
    ...state,
    message: message,
  })),
  on(ExampleActions.showStateData, (state) => ({
    ...state
  })),
);

export function reducer(state: State | any, action: Action) {
  return exampleReducer(state, action);
}
