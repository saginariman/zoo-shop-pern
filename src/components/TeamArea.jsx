import img from "../assets/img/team/team-1.jpg";

const TeamArea = () => {
  return (
    <div className="team-ara pt-95 pb-70">
        <div className="container">
            <div className="section-title text-center mb-55">
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>
            <div className="row">
                {[1, 2, 3, 4].map((item, index) => 
                    <div className="col-lg-3 col-md-6 col-sm-6" key={item}>
                        <div className="team-wrapper mb-30">
                            <div className="team-img">
                                <a href="#">
                                    <img src={img} alt=""/>
                                </a>
                                <div className="team-social">
                                    <a href="#">
                                        <i className="ti-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-pinterest"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                    <a href="#">
                                        <i className="ti-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h4>Adam Jonson</h4>
                                <span>Customer </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default TeamArea