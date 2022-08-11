import './App.css';
import { React } from 'react';
import Login from './components/login/login';
import Signup from './components/singup/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
