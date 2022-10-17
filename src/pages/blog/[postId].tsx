import { useContext } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import Post from "../../models/blog-post";

import { PostsContext } from "../../store/posts-context";

function DetailPost() {
  const router = useRouter();
  const postId = router.query.postId;

  const postsCtx = useContext(PostsContext);
  const posts = postsCtx.items;

  let selectedPost: Post = {
    id: "00",
    title: "게시글 제목",
    content: "게시글 내용",
    createdAt: new Date().toISOString(),
  };

  posts.map((post) => {
    if (post.id === postId) {
      selectedPost = post;
      return;
    }
  });

  return (
    <>
      <Head>
        <title>{selectedPost?.title}</title>
        <meta name="description" content="엄청난 컨텐츠" />
      </Head>

      <h1>DetailPost.</h1>

      <article>
        <h3 className="text-4xl mb-5">{selectedPost.title}</h3>
        <p className="text-sm">{selectedPost.createdAt}</p>
        <p className="text-xl py-10 pt-6 pb-30">{selectedPost.content}</p>
      </article>

      <button className="block mx-auto" onClick={() => router.back()}>
        뒤로 가기
      </button>
    </>
  );
}

export default DetailPost;
