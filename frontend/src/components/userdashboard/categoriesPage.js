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
        console.log(res.data.data);
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
        <p className="ms-5 fs-4 position-relative">E-Learning | Choose a category, <i>{Cookies.get('user')}</i>!</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
          </li>
          <li className="nav-item">
            <button className='btn p-0'><a className="nav-link" onClick={Logout}>Logout</a></button>
          </li>
        </div>
      </ul>

      <div className="mx-auto w-75 my-auto h-auto">
      <p className="text-white fs-2">Categories</p>
            <div class="row row-cols-2 w-100 mx-auto">
              {datas.map((pack) => (
                <div className="bg-white p-3 my-3 mx-4 rounded position-relative" style={{ width: '28rem' }}>
                    <p className="text-start fw-bold fs-4">{pack.title}</p>
                    <p className="text-start">{pack.description.substring(0, 250) + ' . . .'}</p>
                    <a href={"/quiz/dashboard/" + pack.id}><button
                      type="submit"
                      className="btn btn-primary position-absolute bottom-0 end-0 me-3 mb-1 w-25 rounded-4">Start</button></a>
                </div>
              ))}
            </div>
          </div>
    </>
  )
}

export default Categorydashboard;
