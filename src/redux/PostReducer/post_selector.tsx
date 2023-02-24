import { AppStateType } from "../store";

export const getPostDataSelector= (state: AppStateType) => {
  return state.postReducer.post;
};

export const getIsAuthSelector = (state: AppStateType) => {
  return state.postReducer.isSuccess;
};