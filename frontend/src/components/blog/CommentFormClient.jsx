"use client";

import { Button, Textarea } from "@heroui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// --- Yup Validation ---
const schema = yup.object().shape({
  comment: yup
    .string()
    .required("وارد کردن متن نظر الزامی است")
    .min(10, "متن نظر باید حداقل 10 کاراکتر باشد"),
});

export default function CommentFormClient({ onSubmit, pending, closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-end flex-col gap-y-3 w-full"
    >
      <Textarea
        placeholder="نظر خود را وارد کنید."
        disabled={pending}
        variant="bordered"
        {...register("comment")}
      />

      {errors.comment && (
        <p className="text-red-500 w-full text-sm text-start">
          {errors.comment.message}
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
        <Button type="button" color="danger" variant="flat" onClick={closeModal}>بستن</Button>
      </div>
    </form>
  );
}
