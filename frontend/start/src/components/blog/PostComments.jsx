"use client";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import Comment from "./Comment";

function PostComments({ post: { comments, _id: postId } }) {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          //   onClick={() => addNewCommentHandler(null)}
          variant="faded"
          className="flex items-center py-2"
        >
          <QuestionMarkCircleIcon className="w-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </Button>
        {/* <Modal
          title={parent ? "پاسخ به نظر" : "نظر جدید"}
          description={parent ? parent.user.name : "نظر خود را وارد کنید"}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <CommentForm
            postId={postId}
            parentId={parent ? parent._id : null}
            onClose={() => setOpen(false)}
          />
        </Modal> */}
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments?.map((comment) => {
          return (
            <div key={comment._id}>
              <div className="border border- rounded-xl p-2 sm:p-4 mb-3">
                <Comment
                  comment={comment}
                  //   onAddComment={() => addNewCommentHandler(comment)}
                />
              </div>
              <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                {comment.answers.map((item, index) => {
                  return (
                    <div key={item._id} className="relative">
                      <div
                        className={`answer-item border  rounded-xl p-2 sm:p-4 ${
                          index + 1 === comment.answers.length
                            ? "last-item"
                            : ""
                        }`}
                      >
                        <Comment comment={item} key={item._id} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {comments?.length === 0 && (
          <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </div>
  );
}

export default PostComments;
