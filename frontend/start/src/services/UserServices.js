import http from "./htttpServices";

export function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data.user);
}
