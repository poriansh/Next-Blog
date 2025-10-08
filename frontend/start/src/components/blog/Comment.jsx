import Avatar from "@/ui/Avater";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";

function Comment({ comment }) {
  return (
    <>
      <div className="flex items-center justify-between mb-5 border-b  pb-2">
        <div className="flex items-center ">
          <Avatar
            height={34}
            width={34}
            // alt={comment.user?.name || "-"}
            src={comment.user.avatarUrl}
          />
          <div className="text-sm w-full ">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block  text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
            //   onClick={onAddComment}
              variant="faded"
              className="text-sm flex gap-x-1 p-1 rounded-lg"
            >
              <span className="ml-1">
                <ArrowUturnRightIcon className="w-4" />
              </span>
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className=" leading-loose lg:leading-8 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
}

export default Comment;
