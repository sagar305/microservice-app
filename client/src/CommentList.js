import React from "react";


const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content = comment.content;
    if(comment.status === 'Rejected') {
      content = "This comment is Rejected";
    }

    if(comment.status === 'pending') {
      content = "This comment is still waiting to Mederate";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
