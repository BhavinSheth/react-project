import React, { useState } from "react";
import Comment from "../comment/comment.js";
import "./comments.scss";

const Comments = () => {
  const [text, setText] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    setText("");
  };

  return (
    <div className="comments">
      <p>122 Comments</p>
      <div className="my-2 comments__form d-flex">
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt=""
          className="mr-3 rounded-circle"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(7)].map(() => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Comments;
