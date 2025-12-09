"use client";
import {AddNewComment} from "@/lib/ActionComment";
import CommentFormClient from "./CommentFormClient";
import {useActionState, useEffect} from "react";
import {addToast} from "@heroui/react";

const initialState = {
  error: "",
  message: "",
  validationError: "",
};
export default function CommentForm({parentId, postId, onClose}) {
  const [state, action, pending] = useActionState(AddNewComment, initialState);
  useEffect(() => {
    if (state?.message) {
      addToast({
        title: "نظر ثبت شد",
        description: state.message,
        color: "success",
      });
      onClose();
    }
    if (state?.error) {
      addToast({
        title: "خطا",
        description: state.error,
        color: "danger",
      });
    }
  }, [state?.message, state?.error]);
  return (
    <form
      action={async (formData) => await action({formData, parentId, postId})}
      className="flex items-end flex-col gap-y-3 w-full"
    >
      <CommentFormClient
        onClose={onClose}
        pending={pending}
        validationError={state.validationError}
      />
    </form>
  );
}
