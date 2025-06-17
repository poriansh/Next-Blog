import http from "./htttpServices.js";

export function getSinglePosts(slug) {
  return http.get(`/post/slug/${slug}`).then(({data}) => data.data.post);
}

export function getPosts() {
  return http.get(`/post/list`).then(({data}) => data.data.posts);
}
