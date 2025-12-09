import Author from "@/ui/Author";
import CaverImg from "./CaverImg";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostIntraction from "./PostIntraction";


function RelatedPost({ posts }) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-4 grid-cols-3">
        {posts.map((post) => {
          return (
            <div
              key={post._id}
              className="border border-appsecondary-300 
            p-2 rounded-lg
            "
            >
              <CaverImg {...post} />
              <div className="bg-appsecondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
                <Link scroll={false} href={`/blogs/${post.slug}`}>
                  <h2 className="mb-4 hover:text-appprimary-800 transition-all  font-bold text-appsecondary-700">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center justify-between mb-4">
                  <Author {...post.author} />
                  <div className="flex items-center text-[10px] text-appsecondary-500">
                    <ClockIcon className="w-4 h-4 stroke-appsecondary-500 ml-1" />
                    <span className="ml-1"> خواندن:</span>
                    <span className="ml-1 leading-3">{post.readingTime}</span>
                    <span>دقیقه</span>
                  </div>
                </div>
                {/* <PostIntraction post={post} /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
