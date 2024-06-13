import React from "react";

const FeedBack = ({ name, feedback }: { name: string; feedback: string }) => {
  return (
    <div className="feedback">
      <h1>{name}</h1>
      <p>{feedback}</p>
    </div>
  );
};

export default FeedBack;
