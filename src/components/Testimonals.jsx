import React from 'react'
import '../assets/css/testimonals.css'
import img_3 from "../assets/img/testi/3.jpg"
import img_4 from "../assets/img/testi/4.jpg"
import img_5 from "../assets/img/testi/5.jpg"
import testi_shap from "../assets/img/icon-img/testi-shap.png"
import banner_1 from "../assets/img/banner/banner-1.jpg";

const Testimonals = () => {
  return (
    <div className="testimonial-area pt-90 pb-70 bg-img" style={{backgroundImage:`url(${banner_1})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 ml-auto mr-auto">
                    <div className="testimonial-wrap">
                        <div className="testimonial-text-slider text-center">
                            <div className="sin-testiText">
                                <p>Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo</p>
                            </div>
                            <div className="sin-testiText">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or amro porano ja cai tomi tai go amro porano  amro porano ja cai tomi tai go  .... </p>
                            </div>
                            <div className="sin-testiText">
                                <p>Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo</p>
                            </div>
                            <div className="sin-testiText">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or amro porano ja cai tomi tai go amro porano  amro porano ja cai tomi tai go  .... </p>
                            </div>
                        </div>
                        <div className="testimonial-image-slider text-center">
                            <div className="sin-testiImage">
                                <img src={img_3} alt=""/>
                                <h3>Robiul Islam</h3>
                                <h5>Customer</h5>
                            </div>
                            <div className="sin-testiImage">
                                <img src={img_4} alt=""/>
                                <h3>Robiul Islam</h3>
                                <h5>Customer</h5>
                            </div>
                            <div className="sin-testiImage">
                                <img src={img_3} alt=""/>
                                <h3>F. H. Shuvo</h3>
                                <h5>Developer</h5>
                            </div>
                            <div className="sin-testiImage">
                                <img src={img_5} alt=""/>
                                <h3>T. T. Rayed</h3>
                                <h5>CEO</h5>
                            </div>
                        </div>
                        <div className="testimonial-shap">
                            <img src={testi_shap} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonals