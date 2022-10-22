import React, { useEffect, useState } from "react";

import Post from "../models/blog-post";

import { TOKEN, DATABASE_ID } from "../config";

type PostsContextObj = {
  items: Post[];
  addPost: (postPayload: Post) => void;
  removePost: (id: string) => void;
};

export const PostsContext = React.createContext<PostsContextObj>({
  items: [],
  addPost: (postPayload: Post) => {},
  removePost: (id: string) => {},
});

const PostsContextProvider: React.FC = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  console.log(props);

  // api여기서
  const temp = [
    {
      id: "p0",
      title: "post1",
      content: "post내용1",
      createdAt: "2022. 10. 17. 오후 10:34:02",
    },
    {
      id: "p1",
      title: "post2",
      content: "post내용2",
      createdAt: "2022. 10. 17. 오후 10:30:00",
    },
  ];

  useEffect(() => {
    setPosts(temp);
  }, []);

  const addPostHandler = (postPayload: Post) => {
    const { id, title, content, createdAt } = postPayload;
    const newPost = new Post(title, content);

    setPosts((prevPosts) => {
      return prevPosts.concat(newPost);
    });
  };

  const removePostHandler = (PostId: string) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== PostId);
    });
  };

  const contextValue: PostsContextObj = {
    items: posts,
    addPost: addPostHandler,
    removePost: removePostHandler,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
