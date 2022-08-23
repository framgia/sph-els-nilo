import { useState, useEffect } from "react";

const Addwords = () => {

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
                            <span className="input-group-text w-100 mt-4 bg-white"> WORD OF THE DAY </span>
                        </div>
                        <div className="mb-3 fs-5">

                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Choices</label>

                            <div className="input-group mb-3" style={{ width: '400px' }}>
                                <span className="input-group-text" htmlFor='A'>A. </span>
                                <span className="input-group-text w-75 bg-white"> Choice A </span>

                                <div className="input-group-text">
                                    <input
                                        type="checkbox"
                                        value={['A', 'true']}
                                        id="A"
                                        className="form-check-input mt-0"
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAns(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group mb-3" style={{ width: '400px' }}>
                                <span className="input-group-text" htmlFor='B'>B. </span>
                                <span className="input-group-text w-75 bg-white"> Choice B </span>
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        id="B"
                                        value={['B', 'true']}
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAns(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group mb-3" style={{ width: '400px' }}>
                                <span className="input-group-text" htmlFor='C'>C. </span>
                                <span className="input-group-text w-75 bg-white"> Choice C </span>
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        id="C"
                                        value={['C', 'true']}
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAns(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="input-group mb-3" style={{ width: '400px' }}>
                                <span className="input-group-text">D. </span>
                                <span className="input-group-text w-75 bg-white" htmlFor='D'> Choice D </span>
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        id="D"
                                        value={['D', 'true']}
                                        aria-label="Checkbox htmlFor following text input"
                                        onClick={(e) => setAns(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary position-fixed end-50">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Addwords;
