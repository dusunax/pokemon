import Head from "next/head";
import Router from "next/router";

import BlogPostItems from "../components/organisms/posts/blog-posts/blog-post-items";
import ProfileArticle from "../components/organisms/article/profile-article";

import { TOKEN, DATABASE_ID } from "../config";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>기록하는 페이지: 프론트엔드 개발 일지</title>
        <meta
          name="description"
          content="기록하는 페이지: 프론트엔드 개발 일지"
        />
      </Head>

      <h1 className="text-3xl">Hello.</h1>

      <div className="flex gap-10">
        <div className="basis-2/4">
          <BlogPostItems posts={props.posts} limit={3} />
          <button
            className="block ml-auto mt-10"
            onClick={() => {
              Router.push("/blog");
            }}
          >
            블로그 바로가기
          </button>
        </div>

        <div className="basis-2/4">
          <ProfileArticle />
          <button
            className="block ml-auto mt-4"
            onClick={() => {
              Router.push("/profile");
            }}
          >
            프로필 바로가기
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await (
    await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    )
  ).json();
  const fetchResults = res.results;

  return {
    props: {
      posts: fetchResults,
    },
  };
}

export default HomePage;
