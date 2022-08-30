import React from 'react'
import '../assets/css/slider.css'
import slider_img_1 from "../assets/img/slider/slider-single-img.png";
import slider_img_2 from "../assets/img/slider/slider-single-img-2.png";

const MainSlider = () => {
  return (
    <div className="slider-area">
        <div className="slider-active owl-dot-style owl-carousel">
            <div className="single-slider pt-100 pb-100 yellow-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 col-sm-7">
                            <div className="slider-content slider-animated-1 pt-114">
                                <h3 className="animated">We keep pets for pleasure.</h3>
                                <h1 className="animated">Food  Vitamins <br/>For all Pets</h1>
                                <div className="slider-btn">
                                    <a className="animated" href="product-details.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 col-sm-5">
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={slider_img_1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-slider pt-100 pb-100 yellow-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-7 col-12">
                            <div className="slider-content slider-animated-1 pt-114">
                                <h3 className="animated">We keep pets for pleasure.</h3>
                                <h1 className="animated">Food  Vitamins <br/>For all Pets</h1>
                                <div className="slider-btn">
                                    <a className="animated" href="product-details.html">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-5 col-12">
                            <div className="slider-single-img slider-animated-1">
                                <img className="animated" src={slider_img_2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSlider