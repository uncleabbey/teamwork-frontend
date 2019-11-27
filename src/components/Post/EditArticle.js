import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import Loader from './../../containers/Loader';
import { NavLink } from 'react-router-dom';

const EditArticle = (props) => {
  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({
    title: '',
    article: '',
    tags: []
  });
  const [tag, setTag] = useState([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
    setLoading(true);
    const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/articles/${props.match.params.id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const res = await response.json();
        const {title, article, tags} = res.data;
        setInputs({
          title,
          article,
          tags: tags
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.match.params.id]);


  const handleChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = e => {
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
    const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/articles/${props.match.params.id}`
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const res = await response.json();
      setMessage(res.data.message);
      props.history.push(`/article/${props.match.params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="article-form">
      <h2>Edit Article</h2>
      <div className="pt-2">
        <NavLink to={`/article/${props.match.params.id}`}>
        <span className="btn btn-sm btn-primary ml-4">Back</span>
      </NavLink>
      </div>
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          required
          value={inputs.title}
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <br />
        <label>Article: </label>
        <br />
        <textarea
          value={inputs.article}
          cols="30"
          rows="10"
          required
          name="article"
          placeholder="Article"
          onChange={handleChange}
        ></textarea>
        <p>
          Tags:{' '}
          {inputs.tags.map((tag, index) => (
            <span key={index}>
              {tag}
            </span>
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

export default EditArticle;
