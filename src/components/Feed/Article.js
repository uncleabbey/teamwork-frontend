import React from 'react'
import { NavLink } from 'react-router-dom';

const Article = ({title, createdOn, content, id, firstName, lastName}) => {
  const dateString = new Date(createdOn.replace(' ', 'T'))
  const more = <div>{content.substr(0, 120)} <NavLink to={`/article/${id}`}> Read more.....</NavLink></div>
  return (
    <div>
      <div className="comments">
        <span className="user-name">{firstName + ' ' + lastName}</span>
        <small className="float-right">
          {dateString.toLocaleString()}
      </small>
      </div>
        
        <NavLink to={`/article/${id}`}><h6>{title}</h6></NavLink>
        <div>
          {content.length > 110 ?  more : content}
        </div>
    </div>
  )
}

export default Article;
