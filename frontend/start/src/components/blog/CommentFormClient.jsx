"use client";

import { Button, Textarea } from "@heroui/react";
import { useFormStatus } from "react-dom";
// import Button from "@/ui/Button";

export default function CommentFormClient({ onClose, pending }) {
  // const { pending } = useFormStatus();

  return (
    <>
      <Textarea
        name="comment"
        placeholder="نظر خود را وارد کنید..."
        disabled={pending}
        variant="bordered"
      />
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
    </>
  );
}
