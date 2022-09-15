import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogIn({ user, setUser }) {
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    login: '', password: '',
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.id);
      navigate('/');
    } else {
      setError('Такого пользователя не существует');
    }
  };
  return (
    <>
      {error && <div>{error}</div>}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите Email
            <input value={input.login} onChange={inputHandler} name="login" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Введите пароль
            <input value={input.password} onChange={inputHandler} name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
    </>
  );
}
