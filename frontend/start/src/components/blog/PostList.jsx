import React from "react";
import CaverImg from "./CaverImg";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "@/ui/Author";
import PostIntraction from "./PostIntraction";
import { getPosts } from "@/services/PostServices";

async function PostList({ option = "" }) {
  const posts = await getPosts(option);
  if (posts.length === 0) return <p>هیچ پستی یافت نشد</p>;
  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4 border border-appsecondary-300 
            p-2 rounded-lg
            "
          >
            <CaverImg {...post} />
            <div className="bg-appsecondary-100  p-2 rounded-lg flex flex-col w-full justify-between flex-1">
              <Link href={`/blogs/${post.slug}`}>
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
              <PostIntraction post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
