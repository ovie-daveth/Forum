import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
import Replies from './components/Replies'
import './App.css';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id/reply" element={<Replies />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
