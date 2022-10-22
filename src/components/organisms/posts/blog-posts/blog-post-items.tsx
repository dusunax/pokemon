import { useContext } from "react";

import BlogPostItem from "../../../molecules/post/blog-post/blog-post-item";

import { PostsContext } from "../../../../store/posts-context";

type Post = {
  id: string;
  icon: string;
  title: string;
  content: string;
  createdAt: string;
};

const BlogPostItems: React.FC = (props) => {
  const postsCtx = useContext(PostsContext);
  // const posts = postsCtx.items;
  const limit: number = props.limit;

  const parseResult = props.posts?.map((page: Post) => {
    console.log(page);

    return {
      id: page.id,
      icon: page.icon,
      title: page.properties.task.title[0]?.plain_text,
      content: page.properties.content.rich_text[0]?.plain_text,
      createdAt: page.created_time.slice(0, 10).split("-").join(". "),
    };
  });

  return (
    <ul className="flex flex-col">
      {parseResult?.map((post, idx) => {
        if (limit === 0 || idx < limit) {
          return <BlogPostItem key={post.id} post={post} />;
        }
      })}
    </ul>
  );
};

export default BlogPostItems;
