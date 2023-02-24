import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./AuthReducer/auth_reducer";
import postReducer from "./PostReducer/post_reducer";

const store = configureStore({
  reducer: {
    authReducer,
    postReducer
  },
});

export type AppStateType = ReturnType<typeof store.getState>;

export type InfersActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;
export type AppDispatch = typeof store.dispatch;

export default store;
