import React from "react";

const PostCard = ({ title, body, id }) => {
  const cardStyle = {
    width: "300px",
    height: "300px",
    opacity:"0.6",
  };
  return (
    <div className="card m-3" style={cardStyle}>
      <div className="card-body">
        <h3 className="text-center">{id}</h3>
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
