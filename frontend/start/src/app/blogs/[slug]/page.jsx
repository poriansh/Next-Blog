import {getPosts, getSinglePosts} from "@/services/PostServices";
import Image from "next/image";
import {notFound} from "next/navigation";


export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({params}) {
  const post = await getSinglePosts(params.slug);
  return {
    title: `${post.title}`,
  };
}
async function BlogSlug({ params }) {
 
  const post = await getSinglePosts(params.slug);
  if (!post) notFound()
    return (
      <div className="text-secondary-600  max-w-screen-md mx-auto">
        <h1 className="text-secondary-700 text-2xl font-bold mb-8">{post.title}</h1>
        <p className="mb-4">{post.briefText}</p>
        <p className="mb-8">{post.text}</p>
        <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
          <Image
            className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
            fill
            src={post.coverImageUrl}
            alt={post.title}
          />
        </div>
      </div>
    );
 
}


export default BlogSlug;
