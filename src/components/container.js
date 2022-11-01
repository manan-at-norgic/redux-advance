import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postsActions";

const Container = () => {
  const dispatch = useDispatch();
  const { posts, users } = useSelector(
    (state) => ({
      posts: state.posts,
      users: state.users,
    }),
    shallowEqual
  );
  // console.log(users, "usersss");
  // useEffect(() => {
  //   dispatch(getPosts());
  //   console.log(`dispatched`);
  // }, []);
  return (
    <div>
      container <br />
      users = {JSON.stringify(users)}
      <br />
      posts = {JSON.stringify(posts)}
      {/* {console.log(posts, "postsssss")} */}
      <br />
      <div
        onClick={() => {
          dispatch(getPosts());
        }}
      >
        add posts
      </div>
    </div>
  );
};

export default Container;
// need to fix error useSelector hooks then use thunk
