import React from 'react';

const PostComments = ({handleSubmit, comment, handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        placeholder="comments"
        onChange={handleChange}
      ></textarea>
      <button className="add-comment">Add</button>
    </form>
  );
};

export default PostComments;
