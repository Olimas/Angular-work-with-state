import {createAction, props} from "@ngrx/store";

export namespace ExampleActions {
  export const increaseCount = createAction("INCREASE_COUNT");
  export const sendMessage = createAction(
    "SEND_MESSAGE",
    props<{ message?: string }>()
  );
  export const showStateData = createAction("SHOW_STATE_DATA",
    props<{ message?: string, count?: number}>(),
  );
}
