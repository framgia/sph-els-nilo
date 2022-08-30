import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CAT_URL = '/categories';

const Admindashboard = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (pageNumber) => {
    axios
      .get(CAT_URL + '?page=' + pageNumber)
      .then((res) => {
        setLinks(res.data.links);
        setDatas(res.data.data);
      })
  }

  const Delete = (id) => {
    axios
      .delete(CAT_URL + '/' + id)
      .then(() => {
        fetchData();
      })
      toast.success('Category Deleted!');
  }

  const Logout = () => {
    Cookies.remove('token');
    Cookies.remove('isAdmin');
    navigate('/');
  }

  return (
    <>
      <ul className="nav bg-white p-3 w-100 mh-200 mb-3">
        <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="/admin/addcategory">Add a Category</a>
          </li>
          <li className="nav-item">
            <button className='btn p-0'><a className="nav-link" onClick={Logout}>Logout</a></button>
          </li>
        </div>
      </ul>
      <div className="w-75 mx-auto p-3">
        <p className="text-white fw-lighter position-sticky fs-2">Categories</p>
        <table className="table bg-white table-hover table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              datas.map((pack) => (
                <>
                  <tr>
                    <td className="p-2 w-25"><a className="link-primary" href="#">{pack.title}</a></td>
                    <td className="w-25">{pack.description.substring(0, 75) + ' . . .'}</td>
                    <td className="w-25">
                      <a className="link-secondary" href={"/admin/addword/" + pack.id}><button className="btn">Add word</button></a><i> | </i>
                      <button className="btn">Edit</button><i> | </i>
                      <button className="btn" onClick={() => Delete(pack.id)}>Delete</button>
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
        </table>
        <ul className="pagination justify-content-end">
          {
            links.map((page) => (
              <>
                <li className="page-item" key={parseFloat(page.label)}>
                  <a className="page-link" href="#">
                    {page.label.replace('&laquo;', '').replace('&raquo;', '')}
                  </a>
                </li>
              </>
            ))
          }
        </ul>
      </div>
      <ToastContainer
            position="bottom-left"
            style={{ fontSize: '0.8rem' }}
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </>
  )
}

export default Admindashboard;
