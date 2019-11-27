import React from 'react'

const User = (props) => {
  return (
    <div className="col-sm-2 user-face">
      <img className="user-side" src={props.user_url} alt="userProfile"/>
      <h3>{props.name}</h3>
    </div>
  )
}

export default User
