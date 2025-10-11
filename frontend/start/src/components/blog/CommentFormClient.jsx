"use client";

import { useFormStatus } from "react-dom";
import Button from "@/ui/Button";

export default function CommentFormClient({ onClose }) {
  const { pending } = useFormStatus();

  return (
    <>
      <textarea
      c
        name="comment"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-52"
        placeholder="نظر خود را وارد کنید..."
        disabled={pending}
      />
      <div className="flex my-5 gap-2 flex-row-reverse items-center justify-end">
        <Button type="submit" variant="secondary" isLoading={pending}>
          ثبت نظر
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          بستن
        </Button>
      </div>
    </>
  );
}
