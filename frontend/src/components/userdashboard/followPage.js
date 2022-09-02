import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';
import { useState } from "react";

const Followpage = () => {
    const navigate = useNavigate();
    const today = new Date();
    const currentHour = today.getHours();
    const [status, setStatus] = useState(false);


    const eventThis = () => {
        setStatus(!status);
    }
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
                        <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                    </li>
                    <li className="nav-item me-40rem">
                        <a className="nav-link active" aria-current="page" href="/words/learned">Words Leanred</a>
                    </li>
                    <li className="nav-item">
                        <button className='btn p-0'><a className="nav-link" onClick={Logout}>Logout</a></button>
                    </li>
                </div>
            </ul>

            <div className="w-75 mx-auto d-flex justify-content-between">
                <div className="w-25 text-white text-center">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="m-2 p-2">
                            <img alt="avatar" src={faker.image.avatar()} height={100} width={100}></img>
                        </div>
                        <div className="fw-bold fs-2">
                            {Cookies.get('user')}
                        </div>
                        <div className="border-top border-primary mx-auto">
                            <div className="d-flex justify-content-between m-2">
                                <div className="d-flex flex-column m-1">
                                    <span>50</span> followers
                                </div>
                                <div className="d-flex flex-column m-1">
                                    <span>50</span> following
                                </div>
                            </div>
                            <div className="mx-auto">
                                <button className="btn btn-primary w-75 m-2 rounded-pill" onClick={eventThis}>{status ? <article>Unfollow</article> : <article>Follow</article>}</button>
                            </div>
                            <div className="m-2 fs-6">
                                <a href="#">Learned # words</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-75 bg-white border p-3 rounded">
                    <span className="fw-bold">Activities</span>
                    <div className="border-top border-primary m-1 p-5">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Followpage;
