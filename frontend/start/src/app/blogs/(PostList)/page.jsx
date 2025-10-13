import PostList from "@/components/blog/PostList";

// export const dynamic = "force-dynamic";

export const metadata = {
  title: "بلاگ ها",
};
async function Blogpage({ searchParams }) {
  const params = await searchParams;
  const search = params.search || "";
  const queries = new URLSearchParams();
  if (search) queries.set("search", search);
  return <PostList queries={queries} />;
}

export default Blogpage;
