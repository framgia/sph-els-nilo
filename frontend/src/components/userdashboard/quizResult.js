import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Cookies from "js-cookie";

const Quizresult = () => {
    const loc = useLocation();
    return (
        <>
            <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
                <p className="ms-5 fs-4 position-relative">
                    E-Learning |
                    {(loc.state.correct < 0.5 * loc.state.length) ? <i className="text-danger"> Better luck next time</i> : (loc.state.correct === loc.state.length) ? <i className="text-danger"> Excellent</i> : <i className="text-danger"> You passed</i>
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
                        {loc.state.title}
                    </div>
                    <div className="p-2 text-black fw-bold fs-5">
                        <i>Result: {(loc.state.correct < 0.5 * loc.state.length) ? <i className="text-danger">{loc.state.correct}</i> : loc.state.correct} out of {loc.state.length}</i>
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

                            {loc.state.charAnswers.map((pack) => {
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
