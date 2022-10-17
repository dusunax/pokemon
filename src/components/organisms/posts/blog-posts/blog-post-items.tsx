import { useContext } from "react";

import BlogPostItem from "../../../molecules/post/blog-post/blog-post-item";

import { PostsContext } from "../../../../store/posts-context";

const BlogPostItems: React.FC = () => {
  const postsCtx = useContext(PostsContext);
  const posts = postsCtx.items;

  return (
    <ul className="flex flex-col">
      {posts?.map((post) => (
        <BlogPostItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </ul>
  );
};

export default BlogPostItems;
