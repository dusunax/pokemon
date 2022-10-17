import React from "react";

import Router from "next/router";

import classes from "./blog-post-item.module.css";

const BlogPostItem: React.FC<{
  id: string;
  title: string;
  content: string;
  createdAt: string;
}> = (props) => {
  return (
    <li
      onClick={() => {
        Router.push(`/blog/${props.id}`);
      }}
    >
      <h3 className={classes.title}>{props.title}</h3>
      <article>
        <p>{props.content}</p>
        <p>{props.createdAt}</p>
      </article>
    </li>
  );
};

export default BlogPostItem;
