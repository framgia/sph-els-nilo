import { React } from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Userdashboard from './components/userdashboard/userdashboard';
import Admindashboard from './components/admindashboard/admindashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Userdashboard />} />
          <Route path="admin.dashboard" element={<Admindashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
