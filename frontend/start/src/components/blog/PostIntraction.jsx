import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon} from "@heroicons/react/24/outline";

function PostIntraction({post}) {
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
        <span>{toPersianDigits(post.likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary">
       <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}

export default PostIntraction;
