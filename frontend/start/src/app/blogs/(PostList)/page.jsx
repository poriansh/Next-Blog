import PostList from "@/components/blog/PostList";

export const metadata = {
  title : 'بلاگ ها',
}
function Blogpage() {

  return (
    <div>
        <PostList />
    </div>
  );
}

export default Blogpage;
