import img from "../assets/img/banner/banner-3.png";
import "../assets/css/area-about-us.css"

const AreaAboutUs = () => {
  return (
    <div className="about-us-area pt-100 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="about-us-img pr-30 wow fadeInLeft">
                        <img alt="" src={img}/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center">
                    <div className="about-us-content">
                        <h2>About Marten</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua. Ut enim ad minim  quis nostrud exercitat ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="about-us-list">
                            <ul>
                                <li>There are many variations of passages</li>
                                <li>Contrary to popular belief is not simply</li>
                                <li>But I must explain to you how all this mistaken </li>
                            </ul>
                        </div>
                        <div className="about-us-btn">
                            <a className="btn-style" href="#">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AreaAboutUs