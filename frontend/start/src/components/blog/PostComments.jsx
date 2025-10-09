"use client";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Button, Textarea } from "@heroui/react";
import Comment from "./Comment";
import Modal from "@/ui/Modal";
import ModalComponent from "@/ui/Modal";
import { useState } from "react";
import { AddNewComment } from "@/lib/ActionComment";

function PostComments({ post: { comments, _id: postId } }) {
  const [isOpen, setOpen] = useState(false);
  const [parentId, setParentId] = useState(null);
  const OpenModal = (parent) => {
    setParentId(parent);
    setOpen(true);
  };
  const createNewComment = AddNewComment.bind(null, parentId, postId);
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
        <h2 className="text-2xl font-bold text-secondary-800">نظرات</h2>
        <Button
          onClick={() => OpenModal(null)}
          variant="faded"
          className="flex items-center py-2"
        >
          <QuestionMarkCircleIcon className="w-4 ml-2" />
          <span>ثبت نظر جدید</span>
        </Button>
        <ModalComponent
          hideFooter={true}
          size="2xl"
          title={parent ? "پاسخ به نظر" : "نظر جدید"}
          description={"نظر خود را وارد کنید"}
          open={isOpen}
          onOpenChange={setOpen}
          // onSubmit={() => AddNewComment()}
        >
          <form
            className="flex items-end flex-col gap-y-3"
            action={createNewComment}
          >
            <Textarea
              className=""
              isClearable
              variant="bordered"
              name="comment"
              color="default"
              placeholder="نظر خود را وارد کنید..."
            />
            <div className="flex  my-5 gap-2 flex-row-reverse items-center justify-end">
              <Button type="submit" color="default" variant="shadow">
                ثبت نظر
              </Button>
              <Button
                type="button"
                color="danger"
                variant="light"
                onPress={() => setOpen(false)}
              >
                بستن
              </Button>
            </div>
          </form>
        </ModalComponent>
      </div>
      <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6 ">
        {comments?.map((comment) => {
          return (
            <div key={comment._id}>
              <div className="border border- rounded-xl p-2 sm:p-4 mb-3">
                <Comment
                  comment={comment}
                  onAddComment={() => OpenModal(comment._id)}
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
                        <Comment
                          comment={item}
                          key={item._id}
                          onAddComment={() => OpenModal(item._id)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        {comments?.length === 0 && (
          <p className="text-center">برای این پست نظری ثبت نشده است</p>
        )}
      </div>
    </div>
  );
}

export default PostComments;
