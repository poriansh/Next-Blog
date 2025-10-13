"use server";
import { addNewComment } from "@/services/PostServices";
import setCookie from "@/utils/setCookie";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function AddNewComment(prevState, { formData, parentId, postId }) {
  const cookieStore = await cookies();
  const optionsHeaders = await setCookie(cookieStore);
  const dataComment = {
    parentId,
    postId,
    text: formData.get("comment"),
  };
  try {
    const { message } = await addNewComment(dataComment, optionsHeaders);
    revalidatePath(`/blogs/[slug]`);
    return {
      message,
    };
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "خطایی رخ داده است";
    return {
      error: errorMessage,
    };
  }
}
