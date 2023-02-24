import { GetNewPostType, postAPI } from "../../api/post_api";
import { BaseThunkType, InfersActionsTypes } from "../store";

let initialState = {
  isSuccess: false as boolean | null,
  post: [] as GetNewPostType[],
};

const postReducer = (
  state = initialState,
  action: ActionCreatesTypes
): InitialStateType => {
  switch (action.type) {
    case "SET_DELETE_POST":
      return {
        ...state,
        post: state.post.filter((post) => post.id !== action.payload),
      };

    case "SET_NEW_POST":
      return { ...state, post: [...state.post, ...action.payload] };

    case "SET_CLEAN_DATA":
      return { post: [], isSuccess: null };

    case "SET_POST":
      return { ...state, post: action.payload };

    case "SET_IS_SUCCESS":
      return { ...state, isSuccess: action.payload };
    default:
      return state;
  }
};

export const actions = {
  setDeletePost: (numberPost: number) =>
    ({ type: "SET_DELETE_POST", payload: numberPost } as const),
  setNewPost: (data: GetNewPostType[]) =>
    ({ type: "SET_NEW_POST", payload: data } as const),
  setIsSuccess: (data: boolean | null) =>
    ({ type: "SET_IS_SUCCESS", payload: data } as const),
  setPost: (data: GetNewPostType[]) =>
    ({ type: "SET_POST", payload: data } as const),
  setCleanData: () => ({ type: "SET_CLEAN_DATA" } as const),
};
//
export const deletePostState =
  (numberPost: number): ThunkType =>
  async (dispatch) => {
    try {
      dispatch(actions.setDeletePost(numberPost));
    } catch (err) {
      console.log(err);
      dispatch(actions.setIsSuccess(false));
    }
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
export const deletePost =
  (numberPost: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await postAPI.deletePost(numberPost);
      if (data) {
        dispatch(deletePostState(numberPost));
        dispatch(actions.setIsSuccess(true));
      }
    } catch (err) {
      dispatch(actions.setIsSuccess(false));
      console.log(err);
    }
  };
//
export const getPost =
  (numberPost: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await postAPI.getNewPost(numberPost);
      if (data) {
        dispatch(actions.setPost([data]));
        dispatch(actions.setIsSuccess(true));
      }
    } catch (err) {
      dispatch(actions.setIsSuccess(false));
      console.log(err);
    }
  };

//
export const getNewPost =
  (numberPost: number): ThunkType =>
  async (dispatch) => {
    try {
      const data = await postAPI.getNewPost(numberPost);
      if (data) {
        dispatch(actions.setNewPost([data]));
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

export default postReducer;
export type InitialStateType = typeof initialState;
export type ActionCreatesTypes = InfersActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionCreatesTypes>;
