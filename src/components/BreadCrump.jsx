import bg_img from "../assets/img/banner/banner-2.jpg"
import "../assets/css/bread-crump.css"

const BreadCrump = () => {
  return (
    <div className="breadcrumb-area pt-95 pb-95 bg-img" style={{backgroundImage:`url(${bg_img})`}}>
        <div className="container">
            <div className="breadcrumb-content text-center">
                <h2>About Us</h2>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li className="active">About Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BreadCrump