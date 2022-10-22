import React from "react";

import Router from "next/router";

const BlogPostItem: React.FC = ({ post }) => {
  return (
    <li
      className="py-6 border-b-2"
      onClick={() => {
        Router.push(`/blog/${post.id}`);
      }}
    >
      <article>
        <h3 className="text-2xl mb-2">{post.title}</h3>
        <p className="text-base mb-1">{post.content}</p>
        <p className="text-sm">{post.createdAt}</p>
      </article>
    </li>
  );
};

export default BlogPostItem;
