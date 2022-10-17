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
      className="py-6 border-b-2"
      onClick={() => {
        Router.push(`/blog/${props.id}`);
      }}
    >
      <article>
        <h3 className="text-2xl mb-2">{props.title}</h3>
        <p className="text-base mb-1">{props.content}</p>
        <p className="text-sm">{props.createdAt}</p>
      </article>
    </li>
  );
};

export default BlogPostItem;
