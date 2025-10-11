export default async function setCookie(cookieStore) {
  const accessToken = await cookieStore.get("accessToken");
  const refreshToken = await cookieStore.get("refreshToken");
  const options = {
    headers: {
      Cookie:
        `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}` ||
        "-",
    },
  };
  return options;
}
