import PostList from "@/components/blog/PostList";

function Categorypage({ params, searchParams }) {
  const { categorySlug } = params;
  const search = searchParams.search || "";

  const queries = new URLSearchParams();
  if (categorySlug) queries.set("categorySlug", categorySlug);
  if (search) queries.set("search", search);
  return (
    <div>
      <PostList queries={queries} />
    </div>
  );
}

export default Categorypage;
