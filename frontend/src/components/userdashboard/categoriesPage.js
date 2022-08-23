import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";
import { useState, useEffect } from "react";

const REG_URL = '/categories';

const Categorydashboard = () => {
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
            <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
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

      <div className="row gap-4 justify-content-evenly mx-auto" style={{ maxWidth: '80rem', minWidth: '30rem', padding: '1rem', width: '100vw' }}>
        <div><span className="text-white fs-3 fw-bold" style={{ marginLeft: '5rem' }}>Categories</span></div>
        {datas.map((pack) => (
          <div className="col-2 col-sm-5">
            <div style={{ width: '540px', height: '300px', border: 'solid 2px', backgroundColor: 'white', margin: 'auto', padding: '1rem', borderRadius: '1rem' }}>
              <p className="text-start fw-bold fs-4">{pack.title}</p>
              <p className="text-start">{pack.description.substring(0, 250) + ' . . .'}</p>
              <a href="/quiz/dashboard"><button
                type="submit"
                className="btn btn-primary float-end mb-1"
                style={{ width: '6rem' }}>Start</button></a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Categorydashboard;
