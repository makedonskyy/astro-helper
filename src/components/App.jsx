import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LogIn from './form/LogIn';
import SignUp from './form/SignUp';
import Navbar from './ui/Navbar';
import Main from './pages/Main';
import AllZodias from './pages/AllZodias';
import OneSign from './pages/OneSign';
import MyPredictions from './pages/MyPredictions';
import MyPredictionsCopy from './pages/MyPredictionsCopy';

export default function App({ userId, zodiac, oneSign }) {
  const [user, setUser] = useState(userId || null);
  const [allZodiac, setAllZodiac] = useState(zodiac || null);
  console.log(oneSign);
  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Main user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
        <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
        <Route path="/about" element={<AllZodias user={user} setUser={setUser} zodiac={zodiac} />} />
        <Route path="/about/sign/:id" element={<OneSign user={user} setUser={setUser} oneSign={oneSign} />} />
        <Route path="/mypredictions" element={<MyPredictions user={user} setUser={setUser} />} />
        {/* <Route path="/mypredictions" element={<MyPredictionsCopy user={user} setUser={setUser} />} /> */}
      </Routes>
    </div>
  );
}
