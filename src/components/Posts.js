import React from "react";
import { Loader } from "./Loader";

import "./posts.scss";

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="postContainer">
      <div className="overviewRepo">
        <p>Repositories</p>
        <p>Forked</p>
        <p>Watchers</p>
        <p>Homepage</p>
      </div>
      {posts.map((post) => {
        return (
          <div className="repositories" key={post.id}>
            <h2>{post.name}</h2>
            <span> {post.forks}</span>
            <span> {post.watchers}</span>
            <a href={post.homepage}>{post.name}</a>
          </div>
        );
      })}
    </div>
  );
};
