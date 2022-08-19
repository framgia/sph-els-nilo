import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/api';
import Cookies from 'js-cookie';

const REG_URL = '/categories';
const Addcategory = () => {
    const errRef = useRef();
    const sucRef = useRef();
    const titleRef = useRef();
    const navigate = useNavigate();

    const [msg, setMsg] = useState('');
    const [title, setTitle] = useState('');
    const [sucmsg, setSucMsg] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    useEffect(() => {
        setMsg('');
        setSucMsg('');
    }, [title, description]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(REG_URL,
                { title, description },
                { headers: { 'Content-Type': 'application/json' } });
            setSucMsg('Category Added!');
            sucRef.current.focus();
        } catch (err) {
            if (!err.response) {
                setMsg('No server Response');
            } else if (err.response?.status === 422) {
                setMsg('Category title already exists!');
            } else {
                setMsg('Addition failed!');
            }
            errRef.current.focus();
        }
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
                        <a className="nav-link active" aria-current="page" href="/admin/dashboard">Home</a>
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
            <div className="w-50 m-auto text-white">
                <p className="text-white fs-3">Add Category</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 fs-5">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            ref={titleRef}
                            autoComplete="off"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="textarea"
                            autoComplete="off"
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            required
                        />
                    </div>

                    <p ref={errRef} className={msg ? "errmsg" : "offscreen"} aria-live="assertive" style={{ fontSize: '.8rem', borderRadius: '5px', alignSelf: 'center', marginTop: '1rem', color: 'red' }}>{msg}</p>

                    <p ref={sucRef} className={sucmsg ? "sucmsg" : "offscreen"} aria-live="assertive" style={{ fontSize: '.8rem', borderRadius: '5px', alignSelf: 'center', marginTop: '1rem' }}>{sucmsg}</p>

                    <button
                        type="submit"
                        className="btn btn-primary position-fixed end-50"
                        disabled={!title || !description ? true : false}
                    >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Addcategory;
