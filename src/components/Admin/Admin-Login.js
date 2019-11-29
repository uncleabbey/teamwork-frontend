import React, { useState } from 'react';

const AdminLogin = props => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BASEURL}auth/signin`;
    const data = {
      email: mail,
      password: password
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(data => {
      if(data.status === 'error') {
        console.log(data.error)
          setIsError(true);
        setMessage(data.error);
      }
      localStorage.setItem("token", data.data.token);
      if(data.data.isAdmin === true) {
        props.history.push("/dashboard");
      } else {
        props.history.push('/feed');
      }
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }
  return (
    <div className="container admin">
      <div className="row form-container">
          <form className="login col-sm-6" onSubmit={handleSubmit}>
            <h3>Welcome Login</h3>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Email"
              value={mail}
              onChange={e => setMail(e.target.value)}
            />
            <input
              required
              type="password"
                className="form-control"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="login-button">LOGIN</button>
            <p className="alert alert-danger" role="alert">{isError && message}</p>
          </form>
        <div className="welcome col-sm-6">
          <h2>Teamwork</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
