import React from 'react'

const Comments = ({comment, firstName, lastName, createdOn}) => {
  const dateString = new Date(createdOn.replace(' ', 'T'))
  return (
    <li className="list-group-item">
      <div className="comments">
        <span className="user-name">{firstName + ' ' + lastName}</span>
        <small className="float-right">
          {dateString.toLocaleString()}
      </small>
      </div>
      <div className="card-text">{comment}</div>
    </li>
  )
}

export default Comments
