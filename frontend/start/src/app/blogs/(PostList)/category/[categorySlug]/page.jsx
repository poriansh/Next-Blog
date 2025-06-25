import PostList from "@/components/blog/PostList";

function Categorypage({params}) {
   const {categorySlug} = params
  return (
    <div>
      <PostList option={categorySlug} />
    </div>
  );
}

export default Categorypage;