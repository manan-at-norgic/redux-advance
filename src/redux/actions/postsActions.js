import axios from "axios";
import { ADD_POSTS, IS_LOADING } from "../types";

//types

//actions

const addPosts = (data) => ({
  type: ADD_POSTS,
  payload: data,
});

const setLoading = (data) => ({
  type: IS_LOADING,
  payload: data,
});

//action creators

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // let data = await res.json();
    console.log(res.data);
    dispatch(addPosts(res.data));
    dispatch(setLoading(false));
    // fetch("jsonplaceholder.typicode.com/posts", {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     dispatch(addPosts(data));

    //     dispatch(setLoading(false));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};
