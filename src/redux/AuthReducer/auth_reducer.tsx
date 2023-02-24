import { BaseThunkType, InfersActionsTypes } from "../store";

export type UserType = { email: string; password: string };

let initialState = {
  isAuth: false as boolean | null,
  user: [] as UserType[],
};

const authReducer = (
  state = initialState,
  action: ActionCreatesTypes
): InitialStateType => {
  switch (action.type) {
    case "SET_CLEAN_DATA":
      return { user: [], isAuth: null };

    case "SET_USER":
      return { ...state, user: [action.payload] };

    case "SET_IS_SUCCESS":
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export const actions = {
  setIsSuccess: (data: boolean | null) =>
    ({ type: "SET_IS_SUCCESS", payload: data } as const),
  setUser: (data: UserType) => ({ type: "SET_USER", payload: data } as const),
  setCleanData: () => ({ type: "SET_CLEAN_DATA" } as const),
};

//
export const cleanAllData = (): ThunkType => async (dispatch) => {
  try {
    dispatch(actions.setCleanData());
  } catch (err) {
    console.log(err);
    dispatch(actions.setIsSuccess(false));
  }
};

//
export const getUser = (): ThunkType => async (dispatch) => {
  try {
    const data = localStorage.getItem("user");
    if (data) {
      dispatch(actions.setUser(JSON.parse(data)));
      dispatch(actions.setIsSuccess(true));
    }
  } catch (err) {
    dispatch(actions.setIsSuccess(false));
    console.log(err);
  }
};

//
export const login =
  (email: string, password: string): ThunkType =>
  async (dispatch) => {
    try {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      dispatch(actions.setIsSuccess(true));
    } catch (err) {
      dispatch(actions.setIsSuccess(false));
      console.log(err);
    }
  };
//
export const logOut = (): ThunkType => async (dispatch) => {
  try {
    //delete token
    localStorage.removeItem("user");
    dispatch(cleanAllData());
  } catch (err) {
    console.log(err);
    dispatch(actions.setIsSuccess(false));
  }
};

export default authReducer;
export type InitialStateType = typeof initialState;
export type ActionCreatesTypes = InfersActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionCreatesTypes>;
