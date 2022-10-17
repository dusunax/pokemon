import Head from "next/head";
import Router from "next/router";
import BlogPostItems from "../components/organisms/posts/blog-posts/blog-post-items";
import ProfileArticle from "../components/organisms/article/profile-article";

function HomePage() {
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
          <BlogPostItems />
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

export default HomePage;
