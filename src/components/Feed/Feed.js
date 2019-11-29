import React, { useState, useEffect } from 'react';
import { Pagination } from './Pagination';
import Loader from './../../containers/Loader';
import Article from './Article';
import Gif from './Gif';
import { NavLink } from 'react-router-dom';

const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    setLoading(true);
    const makeFetch = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_BASEURL}feed?currentPage=${currentPage}&pageSize=${pageSize}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      const data = await res.json();
      setData(data.data);
      setCount(data.meta.count);
      setLoading(false);
    };
    makeFetch();
  }, [currentPage, pageSize]);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="feed-cont">
      <h3 className="feed-header">Teamwork Timeline</h3>
      <div className="pt-3 pb-3"> 
        <NavLink to={'/post-gif'}><button className="btn btn-primary">Create Gifs</button> </NavLink>
        <NavLink to={'/create-article'}><button className="btn btn-primary ml-3">Create Articles</button> </NavLink>
        <NavLink to={'/search'}><button className="btn btn-info ml-3">Search</button> </NavLink>
      </div>
      <ul className="list-group mb-4">
        {loading ? (
          <Loader />
        ) : (
          data.map(post => (
            <li key={post.feedID} className="list-group-item">
              {post.type === 'article' ? (
                <Article
                  title={post.title}
                  content={post.content}
                  createdOn={post.createdOn}
                  id={post.id}
                  firstName={post.firstName}
                  lastName={post.lastName}
                />
              ) : (
                <Gif
                  title={post.title}
                  content={post.content}
                  createdOn={post.createdOn}
                  id={post.id}
                  firstName={post.firstName}
                  lastName={post.lastName}
                />
              )}
            </li>
          ))
        )}
      </ul>
      <Pagination
        postsPerPage={pageSize}
        totalPosts={count}
        paginate={paginate}
      />
    </div>
  );
};

export default Feed;
