import React, { useState } from 'react';
import Tag from './Tag';
import { NavLink } from 'react-router-dom';

const CreateArticle = props => {
  const [inputs, setInputs] = useState({
    title: '',
    article: '',
    tags: []
  });
  const [tag, setTag] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleClick = e => {
    e.preventDefault();
    setInputs({ ...inputs, tags: inputs.tags.concat(tag) });
    setTag('');
  };
  const handleTagChange = e => {
    setTag(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const reqBody = {
      title: inputs.title,
      article: inputs.article,
      tags: inputs.tags
    };
    const url = "https://abbey-teamwork-backend.herokuapp.com/api/v1/articles";
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const res = await response.json();
      setMessage(res.data.message);
      props.history.push("/timeline");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="article-form">
      <h2>Create Article</h2>
      <NavLink to={'/timeline'}><button className="btn btn-primary ml-3">Back</button> </NavLink>
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
        <label>Article: </label>
        <br />
        <textarea
          cols="30"
          rows="10"
          required
          name="article"
          placeholder="Article"
          onChange={handleChange}
        ></textarea>
        <p>
          Tags:{' '}
          {inputs.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <Tag
          handleTagChange={handleTagChange}
          handleClick={handleClick}
          tag={tag}
        />
        <button type="submit" className="article-btn">
          Post
        </button>
        <p className="alert alert-success">{message}</p>
      </form>
    </div>
  );
};

export default CreateArticle;
