import { React } from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/protectedRoutes/useAuth';
import Userdashboard from './components/userdashboard/userdashboard';
import Admindashboard from './components/admindashboard/admindashboard';
import Addcategory from './components/admindashboard/addcategroy';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="dashboard" element={<Userdashboard />} />
                    <Route path="admin.dashboard" element={<Admindashboard />} />
                    <Route path="admin.addcategory" element={<Addcategory />} />
                </Route>
                <Route path="/*" element={<Login />} statu replace />
            </Routes>
        </BrowserRouter>
    );
}
