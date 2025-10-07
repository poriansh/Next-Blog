import PostList from "@/components/blog/PostList";

// export const dynamic = "force-dynamic";

export const metadata = {
  title: "بلاگ ها",
};
function Blogpage({ searchParams }) {
  const search = searchParams.search || "";
  const queries = new URLSearchParams();
  if (search) queries.set("search", search);
  return <PostList queries={queries} />;
}

export default Blogpage;
