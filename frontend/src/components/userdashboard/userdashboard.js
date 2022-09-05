import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';
import axios from '../api/api';
import { useState, useEffect } from "react";

const LOG_URL = "/logs"
const Userdashboard = () => {
  const navigate = useNavigate();
  const today = new Date();
  const currentHour = today.getHours();
  const [data, setDatas] = useState([]);

  useEffect(() => {
    axios
    .get(LOG_URL)
    .then((res) => {
      console.log(res.data);
    })
  }, [])

  const Logout = () => {
    Cookies.remove('token');
    Cookies.remove('isAdmin');
    navigate('/');
  }
  return (
    <>
      <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
        <p className="ms-5 fs-4 position-relative">E-Learning | {(currentHour < 12) ? 'Good morning' : (currentHour < 18) ? 'Good afternoon' : 'Good Everning'}, <i>{Cookies.get('user')}</i>!</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="/category/dashboard">Choose a Category</a>
          </li>
          <li className="nav-item">
            <button className='btn p-0'><a className="nav-link" onClick={Logout}>Logout</a></button>
          </li>
        </div>
      </ul>
      <div className="w-75 h-75 mx-auto d-flex justify-content-evenly">
        <div className="text-white">
          <span className="fw-bold fs-4">Dashboard</span><br />
          <div className="d-flex justify-content-end">
            <div className="m-2">
              <img className="rounded-circle" alt="avatar" src={faker.image.avatar()} height={100} width={100}></img>
            </div>
            <div className="m-1">
              <article className="fs-3">{Cookies.get('user')}</article>
              <div className="d-flex flex-column">
                <a className="fw-light" style={{ fontSize: '13px' }} href="/words/learned">Learned # words</a>
                <a className="fw-light" style={{ fontSize: '13px' }} href="#">Learned # lessons</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-75 h-auto p-3 m-2 rounded">
          <span className="fw-bold">Activities</span>
          <div className="border-top border-primary m-2 p-5">

          </div>
        </div>
      </div>
    </>
  )
}

export default Userdashboard;
