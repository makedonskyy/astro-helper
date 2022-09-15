import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from './form/LogIn';
import SignUp from './form/SignUp';
import Navbar from './ui/Navbar';
import Main from './pages/Main';

export default function App({ userId }) {
  const [user, setUser] = useState(userId || null);
  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}
