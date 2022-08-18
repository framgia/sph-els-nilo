const Addcategory = () => {

    return (
        <><ul className="nav bg-white p-3 w-100 mh-200 mb-5">
            <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
            <div className="nav position-absolute end-0">
                <li className="nav-item me-40rem">
                    <a className="nav-link active" aria-current="page" href="admin.dashboard">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link3</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </div>
        </ul>
            <div className="w-50 m-auto text-white">
                <p className="text-white fs-3">Add Category</p>
                <form>
                    <div className="mb-3 fs-5">
                        <label for="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary position-fixed end-50">Submit</button>
                </form>
            </div>

        </>

    )
}
export default Addcategory;
