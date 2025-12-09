"use server";
import {addNewComment} from "@/services/PostServices";
import setCookie from "@/utils/setCookie";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export async function AddNewComment(prevState, {formData, parentId, postId}) {
  const cookieStore = await cookies();
  const optionsHeaders = await setCookie(cookieStore);
  const dataComment = {
    parentId,
    postId,
    text: formData.get("comment"),
  };
  try {
    if (dataComment.text.length < 10) {
      return {
        error: "",
        message: "",
        validationError: "متن نظر باید حداقل 10 کاراکتر باشد",
      };
    }else{
    const {message} = await addNewComment(dataComment, optionsHeaders);
    revalidatePath(`/blogs/[slug]`);
    return {
      error: "",
      message,
      validationError: "",
      };
  }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "خطایی رخ داده است";
    return {
      error: errorMessage,
      validationError: "",
      message: "",
    };
  }
}
