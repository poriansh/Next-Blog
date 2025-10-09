"use server";
import { addNewComment } from "@/services/PostServices";
import setCookie from "@/utils/setCookie";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function AddNewComment(parentId, postId, formData) {
  const cookieStore = cookies();
  const optionsHeaders = setCookie(cookieStore);
  console.log(optionsHeaders);
  const dataComment = {
    parentId,
    postId,
    text: formData.get("comment"),
  };
  console.log(dataComment);
  try {
    const { message } = await addNewComment(dataComment, optionsHeaders);
    // revalidatePath(`/blogs/[slug]`);
    return message;
  } catch (error) {
    console.log(error);
  }
}
