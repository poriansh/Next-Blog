"use client";

import { useActionState } from "react";
import { AddNewComment } from "@/lib/ActionComment";
import { useEffect } from "react";
import { addToast, Button, Textarea } from "@heroui/react";

const initialState = {
  error: "",
  message: "",
  validationError: "",
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

  return (
    <form
      action={async (formData) => await action({ formData, parentId, postId })}
      className="flex items-end flex-col gap-y-3 w-full"
    >
      <Textarea
        placeholder="نظر خود را وارد کنید."
        disabled={pending}
        variant="bordered"
        name="comment"
      />
      {state.validationError && (
        <p className="text-red-500 w-full text-sm text-start">
          {state.validationError}
        </p>
      )}
      <div className="flex my-5 gap-2 flex-row-reverse items-center justify-end">
        <Button
          type="submit"
          color="default"
          variant="faded"
          isLoading={pending}
        >
          ثبت نظر
        </Button>
        <Button type="button" color="danger" variant="flat" onClick={onClose}>
          بستن
        </Button>
      </div>
    </form>
  );
}
