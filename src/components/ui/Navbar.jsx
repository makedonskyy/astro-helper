import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser, userEmail }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">Astro-helper</NavLink>
          <NavLink to="/about" className="navbar-brand">Про знаки зодиака</NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {user ? (
                <>
                  <NavLink to="/mypredictions" className="nav-link">Мои предсказания</NavLink>
                  {/* <div>
                  Привет,
                  {' '}
                  {userEmail}
                </div> */}
                  <button type="button" onClick={logoutHandler} className="nav-link">Выйти</button>
                </>
              )
                : (
                  <>
                    <NavLink to="/signup" className="nav-link active" aria-current="page">Регистрация</NavLink>
                    <NavLink to="/login" className="nav-link">Вход</NavLink>
                  </>
                )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
