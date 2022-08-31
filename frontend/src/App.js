import { React } from 'react';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/protectedRoutes/useAuth';
import Userdashboard from './components/userdashboard/userdashboard';
import Admindashboard from './components/admindashboard/admindashboard';
import Addcategory from './components/admindashboard/addcategroy';
import Addwords from './components/admindashboard/addwords';
import Categorydashboard from './components/userdashboard/categoriesPage';
import Quizitem from './components/userdashboard/quizPage';
import Quizresult from './components/userdashboard/quizResult';

const Roles = {
    'User': 0,
    'Admin': 1
}
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<ProtectedRoutes allowedUsers={[Roles.Admin]} />}>
                    <Route path="/admin/dashboard" element={<Admindashboard />} />
                    <Route path="/admin/addcategory" element={<Addcategory />} />
                    <Route path="/admin/addword/:categoryId" element={<Addwords />} />
                </Route>
                <Route element={<ProtectedRoutes allowedUsers={[Roles.User]} />}>
                    <Route path="/dashboard" element={<Userdashboard />} />
                    <Route path="/category/dashboard" element={<Categorydashboard />} />
                    <Route path="/quiz/dashboard/:categoryId" element={<Quizitem />} />
                    <Route path="/quiz/results" element={<Quizresult />} />
                </Route>
                <Route path="/*" element={<Login />} replace />
            </Routes>
        </BrowserRouter>
    );
}
