
const Addwords = () => {

    return (
        <><ul className="nav bg-white p-3 w-100 mh-200 mb-5">
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
                    <a className="nav-link" href="/logout">Logout</a>
                </li>
            </div>
        </ul>
            <form>
                <div className="text-white w-50 h-500 m-auto">
                    <p className="fs-2 fw-light">Add word</p>
                    <div className="d-flex justify-content-between">
                        <div className="mb-3 fs-5">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" style={{ width: '20rem' }} id="exampleFormControlInput1" />
                        </div>
                        <div className="mb-3 fs-5">
                            <label for="exampleFormControlTextarea1" className="form-label">Choices</label>
                            <input type="text" className="form-control" style={{ width: '20rem' }} id="exampleFormControlInput1" />
                            <input type="text" className="form-control mt-3" style={{ width: '20rem' }} id="exampleFormControlInput1" />
                            <input type="text" className="form-control mt-3" style={{ width: '20rem' }} id="exampleFormControlInput1" />
                            <input type="text" className="form-control mt-3" style={{ width: '20rem' }} id="exampleFormControlInput1" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary position-fixed end-50">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Addwords;
