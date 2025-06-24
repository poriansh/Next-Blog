import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
http.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
http.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    // ✅ بررسی وجود response و status
    if (err.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          { withCredentials: true }
        );
        if (data) return http(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(err); // همیشه reject کن
  }
);

export default http;
