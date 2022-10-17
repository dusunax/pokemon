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

      <button
        onClick={() => {
          Router.push("/blog");
        }}
      >
        블로그 바로가기
      </button>
      <div>
        <BlogPostItems />
      </div>
      <button
        onClick={() => {
          Router.push("/profile");
        }}
      >
        프로필 바로가기
      </button>
      <div>
        <ProfileArticle />
      </div>
    </>
  );
}

export default HomePage;
