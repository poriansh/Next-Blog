"use client";
import { bookmarkPost, likePost } from "@/services/PostServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { addToast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaRegHeart, FaHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
function PostIntraction({ post }) {
  console.log(post);
  const router = useRouter();
  const handleLikePost = async (postId) => {
    try {
      const data = await likePost(postId);
      addToast({
        description: `${data.message}`,
        color: "success",
        timeout: 1500,
        shouldShowTimeoutProgress: true
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  const handleBookmarkPost = async (postId) => {
    try {
      const data = await bookmarkPost(postId);
      addToast({
        description: `${data.message}`,
        color: "success",
        timeout: 1500,
        shouldShowTimeoutProgress: true
      });
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <IoChatboxEllipsesOutline />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => handleLikePost(post._id)} variant="red">
        {post.isLiked ? <FaHeart /> : <FaRegHeart />}
        <span>{toPersianDigits(post.likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => handleBookmarkPost(post._id)} variant="primary">
        {post.isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </ButtonIcon>
    </div>
  );
}

export default PostIntraction;
