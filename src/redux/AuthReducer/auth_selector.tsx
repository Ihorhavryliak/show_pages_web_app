import { AppStateType } from "../store";

export const getUserDataSelector= (state: AppStateType) => {
  return state.authReducer.user;
};

export const getIsAuthSelector = (state: AppStateType) => {
  return state.authReducer.user;
};