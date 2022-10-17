import Head from "next/head";

import BlogPostItems from "../../components/organisms/posts/blog-posts/blog-post-items";

const BlogPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>블로그</title>
        <meta
          name="description"
          content="노션 데이터베이스와 연결된 블로그 페이지입니다."
        />
      </Head>

      <h1 className="text-xl mb-0">Blog.</h1>
      <BlogPostItems />
    </>
  );
};

export default BlogPage;
