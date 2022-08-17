const Admindashboard = () => {

  return (
    <><>
      <ul className="nav bg-white p-3 w-100 mh-200 mb-5">
        <p className="ms-5 fs-4 position-relative">E-Learning System | Admin</p>
        <div className="nav position-absolute end-0">
          <li className="nav-item me-40rem">
            <a className="nav-link active" aria-current="page" href="#">Categories</a>
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
      <p className="text-white fw-lighter position-sticky fs-2" style={{ marginLeft: '11rem' }}>Categories</p>
      <table className="table text-black table-bordered bg-white w-75 m-auto">
        <thead>
          <tr className="text-center">
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">Title 1</a></td>
            <td>Description 1</td>
            <td>
              <a href="#">Add word</a><t> | </t>
              <a href="#">Edit</a><t> | </t>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr>
            <td><a href="#">Title 2</a></td>
            <td>Description 2</td>
            <td>
              <a href="#">Add word</a><t> | </t>
              <a href="#">Edit</a><t> | </t>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr>
            <td><a href="#">Title 3</a></td>
            <td>Description 3</td>
            <td>
              <a href="#">Add word</a><t> | </t>
              <a href="#">Edit</a><t> | </t>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr>
            <td><a href="#">Title 4</a></td>
            <td>Description 4</td>
            <td>
              <a href="#">Add word</a><t> | </t>
              <a href="#">Edit</a><t> | </t>
              <a href="#">Delete</a>
            </td>
          </tr>
          <tr>
            <td><a href="#">Title 5</a></td>
            <td>Description 5</td>
            <td>
              <a href="#">Add word</a><t> | </t>
              <a href="#">Edit</a><t> | </t>
              <a href="#">Delete</a>
            </td>
          </tr>
        </tbody>

      </table>
    </><nav className="mt-5 position-fixed end-0" style={{ marginRight: '11rem' }}>
        <ul class="pagination pagination-sm">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item"><a class="page-link" href="#">9</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav></>

  )
}

export default Admindashboard
