import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../action";
import PostCard from "./PostCard";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  console.log("posts", posts);

  return (
    <div className="main-card d-flex flex-row justify-content-center align-item-center flex-wrap">
      {posts.map(({ title, id, body }) => {
        return (
          <div key={id}  >
            <PostCard title={title} id={id} body={body} />
           </div>
        );
      })}
    </div>
  );
};

export default PostList;
