import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import Loader from './../../containers/Loader';

const GetArticlesByTags = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    const url = `${process.env.REACT_APP_BASEURL}search`;
    const body = {
      tags: props.match.params.tag
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
    
  }, [props.match.params.tag])
  return (
    <div className="feed-cont">
      <h4 className="text-white">Articles that have the tag</h4>
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
  )
}

export default GetArticlesByTags
