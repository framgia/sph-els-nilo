import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";
import { useState, useEffect } from "react";

const REG_URL = '/categories';

const Userdashboard = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (pageNumber) => {
    axios
      .get(REG_URL + '?page=' + pageNumber)
      .then((res) => {
        setDatas(res.data.data);
      })
  }

  const Logout = () => {
    Cookies.remove('token');
    Cookies.remove('isAdmin');
    navigate('/');
  }
  return (
    <>
      <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
        <p className="ms-5 fs-4 position-relative">E-Learning System | Hello, <i>{Cookies.get('user')}</i>!</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="/category/dashboard">Choose a Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link3</a>
          </li>
          <li className="nav-item">
            <button className='btn p-0'><a className="nav-link" onClick={Logout}>Logout</a></button>
          </li>
        </div>
      </ul>
    </>
  )
}

export default Userdashboard;
