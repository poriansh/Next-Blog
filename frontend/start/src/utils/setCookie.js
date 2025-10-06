export default function setCookie(cookieStore) {
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");
  const options = {
    headers: {
      Cookie:
        `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}` ||
        "-",
    },
  };
  return options;
}
