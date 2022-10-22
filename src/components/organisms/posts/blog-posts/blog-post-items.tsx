import { useContext } from "react";

import BlogPostItem from "../../../molecules/post/blog-post/blog-post-item";

import { PostsContext } from "../../../../store/posts-context";

const BlogPostItems: React.FC = (props) => {
  const postsCtx = useContext(PostsContext);
  // const posts = postsCtx.items;

  const parseResult = props.posts?.map((page: { id: string }) => {
    console.log(page);

    return {
      id: page.id,
      title: page.properties.task.title[0]?.plain_text,
      content: page.properties.content.rich_text[0]?.plain_text,
      icon: page.icon,
      createdAt: page.created_time.slice(0, 10).split("-").join(". "),
    };
  });

  return (
    <ul className="flex flex-col">
      {parseResult?.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default BlogPostItems;
