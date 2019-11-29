import React, { useState, useEffect } from 'react';
import Loader from '../../containers/Loader';
import { NavLink } from 'react-router-dom';
import PostComments from './PostComments';
import Comments from './Comments';
import { ErrorBoundary } from './../../containers/Shield';

const OneArticle = props => {
  const [data, setData] = useState({
    comments: [],
    title: '',
    article: '',
    tags: []
  });
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = `${process.env.REACT_APP_BASEURL}articles/${props.match.params.id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const res = await response.json();
        setLoading(false);
        if (res.status === 'error') {
          console.log(res.error);
          setIsError(true);
          setMessage(res.error);
          return setData({
            comments: [],
            title: '',
            article: '',
            tags: []
          });
        }
        return setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.match.params.id]);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const url = `${process.env.REACT_APP_BASEURL}articles/${props.match.params.id}/comment`;
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
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setComment(e.target.value);
  };
  const handleDelete = e => {
    prompt('Are you sure');
    const url = `${process.env.REACT_APP_BASEURL}articles/${props.match.params.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'error') {
          console.log(data.error);
          setIsError(true);
          setMessage(data.error);
        }
        setDeleteMessage(data.message);
        props.history.push('/timeline');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const { comments, title, article, tags } = data;
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
          <span className="btn btn-sm btn-danger ml-3" onClick={handleDelete}>
            Delete
          </span>
        </div>
        <ErrorBoundary message={message}>
          {loading && <Loader />}
          {isError ? (
            <div className="pt-4 pb-4">
              <h5 className="card-text text-danger text-center">
                Error retrieving article
              </h5>
            </div>
          ) : (
            <>
              <div className="card-header">
                <h3>{title}</h3>
                <div className="card-subtitle">
                  Tags:
                  {tags.length > 0 ? (
                    tags.map((tag, index) => (
                      <NavLink to={`/tags/${tag}`} key={index}><span className="ml-2 text-primary">
                        {tag}
                      </span></NavLink>
                    ))
                  ) : (
                    <span>No Tags</span>
                  )}
                </div>
              </div>
              <div className="card-body">
                <div className="card-text">{article}</div>
                <br />
                <br />
                <PostComments
                  handleSubmit={handleSubmit}
                  comment={comment}
                  handleChange={handleChange}
                />
                {message}
              </div>
              <ul className="card-footer list-group mb-4">
                {comments.length > 0
                  ? comments.map(comment => (
                      <Comments
                        key={comment.commentId}
                        comment={comment.comment}
                        firstName={comment.firstName}
                        lastName={comment.lastName}
                        createdOn={comment.createdOn}
                      />
                    ))
                  : 'No comment yet for the article'}
              </ul>
            </>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default OneArticle;
