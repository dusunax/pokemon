import Head from "next/head";

import BlogPostItems from "../../components/organisms/posts/blog-posts/blog-post-items";

import { TOKEN, DATABASE_ID } from "../../config";

const BlogPage: React.FC = () => {
  console.log(TOKEN, DATABASE_ID);

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

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  fetch("https://api.notion.com/v1/databases/database_id/query", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return {
    props: {},
  };
}

export default BlogPage;
