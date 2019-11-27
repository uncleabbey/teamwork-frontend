import React from 'react';
import { NavLink } from 'react-router-dom';

const Gif = ({ title, content, createdOn, id, firstName, lastName }) => {
  const dateString = new Date(createdOn.replace(' ', 'T'))
  return (
    <div>
      <div className="comments">
        <span className="user-name">{firstName + ' ' + lastName}</span>
        <small className="float-right">
          {dateString.toLocaleString()}
      </small>
      </div>
      <NavLink to={`/gif/${id}`}><h6>{title}</h6></NavLink>
      <img className="gif-img" src={content} alt="gifpost" />
    </div>
  );
};

export default Gif;
