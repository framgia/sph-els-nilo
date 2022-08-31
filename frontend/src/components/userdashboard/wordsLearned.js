import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { faker } from '@faker-js/faker';
const Wordslearned = () => {
    const loc = useLocation();
    return (
        <>
            <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
                <p className="ms-5 fs-4 position-relative">
                    E-Learning |
                </p>
                <div className="nav position-absolute end-0">
                    <li className="nav-item me-40rem">
                        <a className="nav-link active" aria-current="page" href="/dashboard">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category/dashboard">Choose a Category</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>
                </div>
            </ul>
            <div className="w-75 h-75 mx-auto d-flex justify-content-evenly">
                <div className="text-white p-3">
                    <span className="fw-bold fs-4">Dashboard</span><br />
                    <div className="d-flex justify-content-between">
                        <div className="m-2 p-2">
                            <img alt="avatar" src={faker.image.avatar()} height={100} width={100}></img>
                        </div>
                        <div className="m-1">
                            <article className="fs-3">{Cookies.get('user')}</article>
                            <a className="fw-light" style={{ fontSize: '14px' }} href="#">Words Learned</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-75 h-auto p-3 m-2 rounded">
                    <span className="fw-bold">Words Learned</span>
                    <div className="border-top border-primary m-2 p-5">
                        <table class="table text-center table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Words</th>
                                    <th scope="col">Answers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Japanese</td>
                                    <td>English</td>
                                </tr>
                                <tr>
                                    <td>Japanese</td>
                                    <td>English</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wordslearned;