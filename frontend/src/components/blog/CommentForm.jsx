"use client";

import { useActionState } from "react";
import { AddNewComment } from "@/lib/ActionComment";
import { useEffect } from "react";
import { addToast } from "@heroui/react";
import CommentFormClient from "./CommentFormClient";

const initialState = {
  error: "",
  message: "",
};

export default function CommentForm({ parentId, postId, onClose }) {
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
  }, [state]);

  const submitForm = (data) => {
    const dataComment = {
      parentId,
      postId,
      text: data.comment,
    };

    action({ dataComment });
  };

  return (
    <CommentFormClient
      closeModal={onClose}
      pending={pending}
      onSubmit={submitForm}
    />
  );
}
