import { Outlet } from 'react-router-dom';
import Login from '../login/login';
import Cookies from 'js-cookie';

const useAuth = () => {
    const user = { loggedIn: Boolean(Cookies.get('Token')) };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />
};

export default ProtectedRoutes;
