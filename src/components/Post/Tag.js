import React from 'react';

const Tag = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Tags"
        value={props.tag}
        onChange={props.handleTagChange}
      />
      <button type="button" onClick={props.handleClick} className="tag">
        Add
      </button>
    </div>
  );
};

export default Tag;
