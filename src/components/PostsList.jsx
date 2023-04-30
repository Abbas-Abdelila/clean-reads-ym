"use client";
import { Post } from "./Post";
import postService from "../services/PostService";
import { useState, useEffect } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await postService.getAllLatestPost();
      setPosts(response?.data?.content);
    } catch (error) {
      console.error("Gönderiler getirilirken bir hata oluştu:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts?.map((post) => {
        return (
          <Post
            key={post.postId}
            post={post}
          />
        );
      })}
      );
    </>
  );
};

export default PostsList;
