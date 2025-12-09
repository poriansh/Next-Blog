"use server";
import {addNewComment} from "@/services/PostServices";
import setCookie from "@/utils/setCookie";
import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";

export async function AddNewComment(prevState, {dataComment}) {
  try {
    const cookieStore = await cookies();
    const optionsHeaders = await setCookie(cookieStore);

    const {message} = await addNewComment(dataComment, optionsHeaders);

    revalidatePath(`/blogs/[slug]`);

    return {
      error: "",
      message,
    };
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "خطایی رخ داده است";
    return {
      error: errorMessage,
      message: "",
    };
  }
}
