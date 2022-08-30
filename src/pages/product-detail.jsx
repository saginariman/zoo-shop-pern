import BreadCrump from '../components/BreadCrump'
import CommentForm from '../components/CommentForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RelatedProductList from '../components/RelatedProductList'
import img1 from "../assets/img/product-details/l1.jpg";
import img2 from "../assets/img/product-details/bl1.jpg";
import img3 from "../assets/img/product-details/s1.jpg";

const ProductDetail = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-img">
                            <img id="zoompro" src={img1} data-zoom-image={img2} alt="zoom"/>
                            <div id="gallery" className="mt-12 product-dec-slider owl-carousel">
                                {[1, 2, 3, 4].map((item, index) =>
                                    <a data-image={img1} data-zoom-image={img2} key={item}>
                                        <img src={img3} alt=""/>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-content">
                            <h2>Dog Calcium Food</h2>
                            <div className="product-rating">
                                <i className="ti-star theme-color"></i>
                                <i className="ti-star theme-color"></i>
                                <i className="ti-star theme-color"></i>
                                <i className="ti-star"></i>
                                <i className="ti-star"></i>
                                <span> ( 01 Customer Review )</span>
                            </div>
                            <div className="product-price">
                                <span className="new">$20.00 </span>
                                <span className="old">$50.00</span>
                            </div>
                            <div className="in-stock">
                                <span><i className="ion-android-checkbox-outline"></i> In Stock</span>
                            </div>
                            <div className="sku">
                                <span>SKU#: MS04</span>
                            </div>
                            <p>Founded in 1989, Jack & Jones is a Danish brand that offers cool, relaxed designs that express a strong visual style through their diffusion lines, Jack & Jones intelligence and Jack & Jones vintage.</p>
                            <div className="product-details-style shorting-style mt-30">
                                <label>color:</label>
                                <select>
                                    <option value=""> Choose an option</option>
                                    <option value=""> orange</option>
                                    <option value=""> pink</option>
                                    <option value=""> yellow</option>
                                </select>
                            </div>
                            <div className="quality-wrapper mt-30 product-quantity">
                                <label>Qty:</label>
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2"/>
                                </div>
                            </div>
                            <div className="product-list-action">
                                <div className="product-list-action-left">
                                    <a className="addtocart-btn" href="#" title="Add to cart">
                                        <i className="ion-bag"></i>
                                        Add to cart
                                    </a>
                                </div>
                                <div className="product-list-action-right">
                                    <a href="#" title="Wishlist">
                                        <i className="ti-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="social-icon mt-30">
                                <ul>
                                    <li><a href="#"><i className="icon-social-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-social-instagram"></i></a></li>
                                    <li><a href="#"><i className="icon-social-linkedin"></i></a></li>
                                    <li><a href="#"><i className="icon-social-skype"></i></a></li>
                                    <li><a href="#"><i className="icon-social-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="description-review-area pb-100">
            <div className="container">
                <div className="description-review-wrapper gray-bg pt-40">
                    <div className="description-review-topbar nav text-center">
                        <a className="active" data-toggle="tab" href="#des-details1">DESCRIPTION</a>
                        <a data-toggle="tab" href="#des-details2">MORE INFORMATION</a>
                        <a data-toggle="tab" href="#des-details3">REVIEWS (2)</a>
                    </div>
                    <div className="tab-content description-review-bottom">
                        <div id="des-details1" className="tab-pane active">
                            <div className="product-description-wrapper">
                                <p>This stewpot is part of the Scanpan classNameic cookware range, which boasts GreenTek non-stick coating which is 100% PFOA free, meaning it's safer for your family and the environment. The heavy-duty, pressure-cast aluminum body has an extra-thick base for quick, even heating and it is compatible with all cooking surfaces (excluding induction). The extraordinarily hard exterior surface is a combination of ceramic and titanium nonstick cooking surface which is impossible to scrape away, even with metal utensils. Patented spring-lock handle stays cool during normal stove top use and the stewpot is also oven safe from up to 260°C. It's also dishwasher safe for easy cleanup. </p>
                                <p>Scanpan is designed and manufactured in Denmark and offers a lifetime warranty.</p>
                                <ul>
                                    <li>Key Features:</li>
                                    <li>Heavy duty, pressure cast aluminium with extra thick base for quick heat up</li>
                                    <li>Ceramic titanium surface with PFOA-free GreenTek non-stick coating</li>
                                    <li>Fat-free frying, metal utensils safe</li>
                                    <li>Suitable for all stove tops, except induction</li>
                                    <li>Guaranteed not to warp</li>
                                    <li>Fast and even heat distribution</li>
                                    <li>Ovenproof up to 260°C</li>
                                    <li>Dishwasher safe - but not recommended</li>
                                    <li>Designed and manufactured in Denmark</li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details2" className="tab-pane">
                            <div className="product-anotherinfo-wrapper">
                                <ul>
                                    <li><span>name:</span> Scanpan classNameic Covered</li>
                                    <li><span>color:</span> orange , pink , yellow </li>
                                    <li><span>size:</span> xl, l , m , sl</li>
                                    <li><span>length:</span> 102cm, 110cm , 115cm </li>
                                    <li><span>Brand:</span> Nike, Religion, Diesel, Monki </li>
                                </ul>
                            </div>
                        </div>
                        <div id="des-details3" className="tab-pane">
                            <div className="rattings-wrapper">
                                <div className="sin-rattings">
                                    <div className="star-author-all">
                                        <div className="product-rating f-left">
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <span>(5)</span>
                                        </div>
                                        <div className="ratting-author f-right">
                                            <h3>tayeb rayed</h3>
                                            <span>12:24</span>
                                            <span>9 March 2018</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost.</p>
                                </div>
                                <div className="sin-rattings">
                                    <div className="star-author-all">
                                        <div className="product-rating f-left">
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star theme-color"></i>
                                            <i className="ti-star"></i>
                                            <span>(4)</span>
                                        </div>
                                        <div className="ratting-author f-right">
                                            <h3>farhana shuvo</h3>
                                            <span>12:24</span>
                                            <span>9 March 2018</span>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost.</p>
                                </div>
                            </div>
                            <div className="ratting-form-wrapper">
                                <h3>Add your Comments :</h3>
                                <div className="ratting-form">
                                    <CommentForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RelatedProductList/>
        <Footer/>
    </div>
  )
}

export default ProductDetail