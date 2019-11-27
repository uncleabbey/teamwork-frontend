import React, { useState } from 'react';
import Input from './Input';

const CreateEmployee = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    jobRole: '',
    department: '',
    address: '',
    isAdmin: ''
  });
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      gender: input.gender,
      jobRole: input.jobRole,
      department: input.department,
      address: input.address,
      isAdmin: input.isAdmin
    };
    const url =
      'https://abbey-teamwork-backend.herokuapp.com/api/v1/auth/create-user';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
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
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="create-emp-container">
      <form className="create-employee" onSubmit={handleSubmit}>
        <div className="form-input">
          <h3 className="emp-title">Create Employee</h3>
          <div className="row">
            <Input
              className="form-control"
              label={'First Name'}
              name={'firstName'}
              type={'text'}
              placeholder={'First Name'}
              value={input.firstName}
              handleChange={handleChange}
            />
            <Input
              className="form-control"
              label={'Last Name'}
              name={'lastName'}
              type={'text'}
              placeholder={'Last Name'}
              value={input.lastName}
              handleChange={handleChange}
            />
          </div>
          <div className="row">
            <Input
              className="form-control"
              label={'Email'}
              name={'email'}
              type={'email'}
              placeholder={'Email'}
              value={input.email}
              handleChange={handleChange}
            />
            <Input
              className="form-control"
              label={'Password'}
              name={'password'}
              type={'password'}
              placeholder={'Password'}
              value={input.password}
              handleChange={handleChange}
            />
          </div>
          <div className="row">
            <Input
              className="form-control"
              label={'Address'}
              name={'address'}
              type={'text'}
              placeholder={'Address'}
              value={input.address}
              handleChange={handleChange}
            />
            <div className="form-group gender">
              <span>Gender</span>
              <br />
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>
          <div className="row">
            <Input
              className="form-control"
              label={'Department'}
              name={'department'}
              type={'text'}
              placeholder={'Department'}
              value={input.department}
              handleChange={handleChange}
            />
            <Input
              className="form-control"
              label={'Job Role'}
              name={'jobRole'}
              type={'text'}
              placeholder={'Job Role'}
              value={input.jobRole}
              handleChange={handleChange}
            />
          </div>
          <div>
            <select
              name="isAdmin"
              onChange={handleChange}
              value={input.isAdmin}
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <button className="submit">Submit</button>
          <br />
          <div className="alert alert-danger" role="alert">
            <p>{isError && message}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
