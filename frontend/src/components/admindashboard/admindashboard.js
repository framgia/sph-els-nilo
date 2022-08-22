import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";
import { useState, useEffect } from "react";

const REG_URL = '/categories';

const Admindashboard = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (pageNumber) => {
    axios
      .get(REG_URL + '?page=' + pageNumber)
      .then((res) => {
        setLinks(res.data.links);
        setDatas(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      });
  }
  
  const Logout = () => {
    Cookies.remove('token');
    Cookies.remove('isAdmin');
    navigate('/');
  }

  return (
    <>
      <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
        <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="/admin/addcategory">Add a Category</a>
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
      <p className="text-white fw-lighter position-sticky fs-2" style={{ marginLeft: '11rem' }}>Categories</p>
      <table className="table text-black table-bordered bg-white w-75 m-auto">
        <thead>
          <tr className="text-center">
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {
          datas.map((pack) => (
            <>
              <tbody key={pack.id.toString()}>
                <tr>
                  <td><a href="#">{pack.title}</a></td>
                  <td>{pack.description.substring(0, 75) + ' . . .'}</td>
                  <td>
                    <a href="admin.addword">Add word</a><i> | </i>
                    <a href="#">Edit</a><i> | </i>
                    <a href="#">Delete</a>
                  </td>
                </tr>
              </tbody>
            </>
          ))
        }
      </table>
      <nav className="mt-5 position-fixed end-0" style={{ marginRight: '11rem' }}>
        <ul className="pagination">
          {
            links.map((page) => (
              <>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {page.label.replace('&laquo;', '').replace('&raquo;', '')}
                  </a>
                </li>
              </>
            ))
          }
        </ul>
      </nav></>
  )
}
export default Admindashboard;
