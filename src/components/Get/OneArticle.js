import React, { useState, useEffect } from 'react';
import Loader from '../../containers/Loader';
import { NavLink } from 'react-router-dom';
import PostComments from './PostComments';
import Comments from './Comments';

const OneArticle = props => {
  const [data, setData] = useState({
    comments: [], 
    title: '', 
    article: ''
  });
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isError, setIsError] = useState(false);
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
        if(data.status === 'error') {
        console.log(data.error)
          setIsError(true);
        setMessage(data.error);
      }
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data.error, data.status, props.match.params.id]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/articles/${props.match.params.id}/comment`;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const res = await response.json();
      setMessage(res.data.message);
      setComment('');
      setData({
        ...data,
        comments: [...data.comments, res.data.commentData]
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setComment(e.target.value);
  };
  const handleDelete = e => {
    prompt('Are you sure');
    const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/articles/${props.match.params.id}`;
    fetch(url, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
      if(data.status === 'error') {
        console.log(data.error)
          setIsError(true);
        setMessage(data.error);
      }
      setDeleteMessage(data.message);
      props.history.push("/timeline");
    })
    .catch(error=> {
      console.log(error);
    })
  }

  const { comments, title, article } = data;
  return (
    <div className="pad-articles">
    <div className="card article-container">
      <h2 className="text-center text-success">{deleteMessage}</h2>
      <div className="pt-2">
        <NavLink to={'/timeline'}>
        <span className="btn btn-sm btn-primary ml-4">Back</span>
      </NavLink>
      <NavLink to={`/edit-article/${props.match.params.id}`}>
        <span className="btn btn-sm btn-success ml-3">Edit</span>
      </NavLink>
        <span className="btn btn-sm btn-danger ml-3" onClick={handleDelete}>Delete</span>
      </div>
      {loading && <Loader />}
      {
        isError ? <h2 className="card-text text-danger">Error retrieving article</h2> :
        <>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <div className="card-text">{article}</div>
        <br/>
        <br/>
        <PostComments
          handleSubmit={handleSubmit}
          comment={comment}
          handleChange={handleChange}
        />
        {message}
      </div>
      <ul className="card-footer list-group mb-4">
        {
          comments.map(comment => <Comments key={comment.commentId} comment={comment.comment} firstName={comment.firstName} lastName={comment.lastName} createdOn={comment.createdOn} />)
        }
      </ul>
      </>
      }
    </div>
    </div>
  );
};

export default OneArticle;
