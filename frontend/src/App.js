import { React } from 'react';
import Login from './components/login/login';
import Signup from './components/singup/signup';
import Dashboard from './components/home/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
