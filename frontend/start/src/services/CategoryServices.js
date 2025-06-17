import http from "./htttpServices";

export function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data.categories);

}
