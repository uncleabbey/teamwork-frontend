import React, { useState, useEffect } from 'react';
import Loader from '../../containers/Loader';
import PostComments from './PostComments';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';

const OneGif = props => {
  const [data, setData] = useState({
    comments: [], 
    title: '', 
    url: ''
  });
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true)
    const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/gifs/${props.match.params.id}`;
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const res = await response.json();
      if(res.status === 'error') {
        console.log(res.error)
          setIsError(true);
        setMessage(res.error);
      }
      setData(res.data);
      setLoading(false)
    };
    fetchData();
  }, [props.match.params.id]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/gifs/${props.match.params.id}/comment`;
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
    const url = `https://abbey-teamwork-backend.herokuapp.com/api/v1/gifs/${props.match.params.id}`;
    fetch(url, {
      method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
      setDeleteMessage(data.message);
      props.history.push("/timeline");
    })
    .catch(error=> {
      console.log(error);
    })
  }
  const { comments, title, url } = data;
  return (
    <div className="pad-articles">
    <div className="card article-container">
      <h2 className="text-center text-success">{deleteMessage}</h2>
      <div>
        <NavLink to={'/timeline'}>
        <button className="btn btn-sm btn-primary">Back</button>
        </NavLink>
        <span className="btn btn-sm btn-danger ml-5" onClick={handleDelete}>Delete</span>
      </div>
      
      {loading && <Loader />}
      {
        isError ? <h2 className="card-text text-danger">Error retrieving article</h2> :
        <>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <img src={url} className="card-img" alt="ImageGifs" />
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

export default OneGif;
