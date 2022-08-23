import { useState, useEffect } from "react";

const Quizitem = () => {

    const [ans, setAns] = useState(false);

    useEffect(() => {
        setAns('');
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(ans);
    }

    return (
        <><ul className="nav bg-white p-3 w-100 mh-200 mb-5">
            <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
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
                    <a className="nav-link" href="/logout">Logout</a>
                </li>
            </div>
        </ul>
            <form onSubmit={handleSubmit}>
                <div className="text-white w-75 h-500 m-auto">
                    <p className="fs-2 fw-light">Title of the category</p>
                    <div className="d-flex justify-content-evenly">
                        <div className="mb-3 fs-5">
                            <span className="input-group-text w-100 mt-4 bg-white w-50 h-50"> WORD OF THE DAY </span>
                        </div>
                        <div className="mb-3 fs-5" style={{ maxWidth: '300px', textAlign: 'end' }}>

                            <label htmlFor="exampleFormControlTextarea1" className="form-label">3 of 20</label>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-primary" style={{ width: '500px' }}>Submit</button>
                            </div>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-primary" style={{ width: '500px' }}>Submit</button>
                            </div>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-primary" style={{ width: '500px' }}>Submit</button>
                            </div>

                            <div className="input-group mb-3">
                                <button type="submit" className="btn btn-primary" style={{ width: '500px' }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Quizitem;
