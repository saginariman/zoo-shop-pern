import "../assets/css/pagination.css"

const Pagination = () => {
  return (
    <div className="pagination-style text-center mt-20">
        <ul>
            <li>
                <a href="#"><i className="icon-arrow-left"></i></a>
            </li>
            <li>
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a className="active" href="#"><i className="icon-arrow-right"></i></a>
            </li>
        </ul>
    </div>
  )
}

export default Pagination