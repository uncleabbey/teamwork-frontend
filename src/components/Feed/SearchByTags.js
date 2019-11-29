import React, { useState } from 'react';
import Loader from '../../containers/Loader';
import { NavLink } from 'react-router-dom';

const SearchByTags = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    const url = `${process.env.REACT_APP_BASEURL}search`;
    const body = {
      tags: search
    };
    console.log(body);
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.data.message === 'No Article has that tag in the database') {
          console.log(res.data);
          setMessage(res.data.message);
          setData([]);
          setLoading(false);
          throw new Error('No Article has that tag in the database');
        }
        console.log(res.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  };
  return (
    <div className="feed-cont">
      <h3 className="feed-header">Search by Tags</h3>
      <form onSubmit={handleSubmit} className="pt-3 pb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search Articles By Tags"
          onChange={e => setSearch(e.target.value)}
        />
      </form>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ul className="list-group mb-4">
            {data.length > 0 ? (
              data.map(({ article_id: id, title }) => (
                <li key={id} className="list-group-item">
                  <NavLink to={`/article/${id}`}><p>{title}</p></NavLink>
                </li>
              ))
            ) : (
              <div className="bg-white"><h6 className="text-danger">{message}</h6></div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchByTags;
