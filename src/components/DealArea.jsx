import React from 'react'
import banner_2 from "../assets/img/banner/banner-2.png";
import '../assets/css/deal-are.css'
const DealArea = () => {
  return (
    <div className="deal-area bg-img pt-95 pb-100">
        <div className="container">
            <div className="section-title text-center mb-50">
                <h4>Best Product</h4>
                <h2>Deal of the Week</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="deal-img wow fadeInLeft">
                        <a href="#"><img src={banner_2} alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="deal-content">
                        <h3><a href="#">Name Your Product</a></h3>
                        <div className="deal-pro-price">
                            <span className="deal-old-price">$16.00 </span>
                            <span> $10.00</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, co adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commodo </p>
                        <div className="timer timer-style">
                            <div data-countdown="2017/10/01"></div>
                        </div>
                        <div className="discount-btn mt-35">
                            <a className="btn-style" href="#">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealArea