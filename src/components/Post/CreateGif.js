import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const CreateGif = props => {
  const [inputs, setInputs] = useState({
    title: '',
    file: ''
  })
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  const handleImage = e => {
    setInputs({...inputs, file: e.target.files[0]})
  }
  const handleSubmit = e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BASEURL}gifs`;
    const formData = new FormData();
    formData.append('title', inputs.title);
    formData.append('imageUrl', inputs.file);
    for (const value of formData) {
      console.log(value)
    }
    fetch(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
    }).then(res => res.json()).then(data => {
      console.log(data);
      setMessage(data.message);
      props.history.push("/timeline");
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="article-form">
      <NavLink to={'/timeline'}><button className="btn btn-primary ml-3">Back</button> </NavLink>
      <h2>Post Gifs</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          required
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <label>Gifs: </label>
        <br />
        <input type="file" name="imageUrl" onChange={handleImage} />
        
        <button type="submit" className="article-btn">
          Post
        </button>
        <p className="alert alert-success">{message}</p>
      </form>
    </div>
  );
};

export default CreateGif;
