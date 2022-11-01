import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/postsActions";

const Container = ({ value, posts, addPosts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      container{" "}
      {/* {value.map((e) => {
        return e.fName;
      })}{" "} */}
      {JSON.stringify(posts)}
      {console.log(posts)}
      <br />
      <div
        onClick={() => {
          addPosts({ id: 1, user: "user1", description: "description here" });
        }}
      >
        add posts
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.users,
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  addPosts: (data) => {
    dispatch({ type: "ADD_POSTS", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
