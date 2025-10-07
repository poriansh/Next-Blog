import { alert } from "@heroui/react";
import http from "./htttpServices.js";
import { notFound } from "next/navigation";
export async function getSinglePosts(slug) {
  try {
    const { data } = await http.get(`/post/slug/${slug}`);
    return data.data.post;
  } catch (err) {
    if (err.response?.status === 404) {
      notFound();
    }
    throw err;
  }
}

// چون از axios استفاده کردی، Next.js نتونسته بفهمه ریکوئستت dynamic ـه → نتیجه: صفحه Static شده.
export async function getPosts(queries, optionsHeaders) {
  try {
    const { data } = await http.get(`/post/list?${queries}`, optionsHeaders);
    return data.data.posts;
  } catch (err) {
    if (err.response?.status === 404) {
      return [];
    }
    throw err;
  }
}

export async function likePost(postId) {
  return http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
export async function bookmarkPost(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}
