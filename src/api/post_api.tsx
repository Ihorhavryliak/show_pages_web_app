import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const postAPI = {
  // get post
  async getNewPost(numberPost: number) {
    const res = await api.get<GetNewPostType>(`posts/${numberPost}`);
    return res.data;
  },
  // delete post
  async deletePost(numberPost: number) {
    const res = await api.delete<any>(`posts/${numberPost}`);
    return res.data;
  },
};

export type GetNewPostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
