import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


function AnswerFeedback() {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  return (
    <div className="flex gap-3 mt-2">
      <button className="text-green-400" onClick = {isDisliked ? (() => (setIsLiked(false))) : (() => (setIsLiked(!isLiked)))}>{isLiked ? <AiFillLike /> : <AiOutlineLike/>}</button>
      <button className="text-red-400" onClick = {isLiked ? (() => (setIsDisliked(flase))) : (() => (setIsDisliked(!isDisliked)))}>{isDisliked ? <AiFillDislike /> : <AiOutlineDislike/>}</button>
    </div>
  );
}

export default AnswerFeedback;
