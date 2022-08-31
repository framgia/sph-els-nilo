import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "../api/api";

const LOG_URL = "/logs";
const Quizresult = () => {
    const location = useLocation();
    useEffect(() => {
        location.state.charAnswers.map((valid) => (
            valid.isCorrect
                ?
                axios.post(LOG_URL,
                    { userId: valid.userId, word: valid.character, answer: valid.choice },
                    { headers: { 'Content-Type': 'application/json' } })
                :
                false
        ))
    }, []);
    return (
        <>
            <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
                <p className="ms-5 fs-4 position-relative">
                    E-Learning |
                    {(location.state.correct < 0.5 * location.state.length) ? <i className="text-danger"> Better luck next time</i> : (location.state.correct === location.state.length) ? <i className="text-danger"> Excellent</i> : <i className="text-danger"> You passed</i>
                    }, <i>{Cookies.get('user')}</i>!
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
            <div className="mx-auto w-75 h-auto bg-white rounded">
                <div className="d-flex justify-content-between mx-4">
                    <div className="p-2 text-black fw-bold fs-4">
                        {location.state.title}
                    </div>
                    <div className="p-2 text-black fw-bold fs-5">
                        <i>Result: {(location.state.correct < 0.5 * location.state.length) ? <i className="text-danger">{location.state.correct}</i> : location.state.correct} out of {location.state.length}</i>
                    </div>
                </div>
                <div className="text-black d-flex justify-content-evenly w-100 mx-auto">
                    <table className="table my-3 text-center">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" className="fs-4">Word</th>
                                <th scope="col" className="fs-4">Answer</th>
                            </tr>
                        </thead>
                        <tbody>

                            {location.state.charAnswers.map((pack) => {
                                return (<>
                                    <tr>
                                        <td>{pack.isCorrect ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}</td>
                                        <td><p className="fw-light">{pack.character}</p></td>
                                        <td>{pack.isCorrect ? <p className="fw-light text-primary">{pack.choice}</p> : <p className="text-danger fw-light">{pack.choice}</p>}</td>
                                    </tr>
                                </>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Quizresult;
