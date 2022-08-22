import Login from '../login/login';
import Cookies from 'js-cookie';
import { Outlet } from 'react-router-dom';

const useAuth = (allowedUsers) => {
    const user = { loggedIn: Boolean(Cookies.get('token')) };
    const role = allowedUsers.includes(parseInt(Cookies.get('isAdmin')));
    return user && role;
};

const ProtectedRoutes = ({ allowedUsers }) => {
    const isAuth = useAuth(allowedUsers);
    return isAuth ? <Outlet /> : <Login />
};

export default ProtectedRoutes;
