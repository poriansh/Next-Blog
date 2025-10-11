import { AddNewComment } from "@/lib/ActionComment";
import CommentFormClient from "./CommentFormClient";


export default function CommentForm({ parentId, postId, onClose }) {
  const action = AddNewComment.bind(null, parentId, postId);

  return (
    <form action={action} className="flex items-end flex-col gap-y-3 w-full">
      <CommentFormClient onClose={onClose} />
    </form>
  );
}
