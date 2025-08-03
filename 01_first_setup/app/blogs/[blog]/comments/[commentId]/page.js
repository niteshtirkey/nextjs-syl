import React from "react";

const CommentsID = async ({ params }) => {
  const paramsObj = await params;
  const { blog, commentID } = paramsObj;
  console.log(paramsObj);
  return (
    <div>
      <h1>Comments no {commentID} page {blog}</h1> 
    </div>
  );
};

export default CommentsID;
  
