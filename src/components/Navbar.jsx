import '../assets/css/header.css'
import logo from "../assets/img/logo/logo.png";
import menu_img_4 from "../assets/img/banner/menu-img-4.jpg";
import cart_1 from "../assets/img/cart/cart-1.jpg";
import cart_2 from "../assets/img/cart/cart-2.jpg";

const Navbar = () => {
  return (
    <header className="header-area">
            <div className="header-bottom transparent-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-5">
                            <div className="logo pt-39">
                                <a href="index.html"><img alt="" src={logo}/></a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 d-none d-lg-block">
                            <div className="main-menu text-center">
                                <nav>
                                    <ul>
                                        <li><a href="index.html">HOME</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="index.html">home version 1</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">home version 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-position"><a href="shop-page.html">Food</a>
                                            <ul className="mega-menu">
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title">Dogs Food</li>
                                                        <li><a href="shop-page.html">Eggs</a></li>
                                                        <li><a href="shop-page.html">Carrots</a></li>
                                                        <li><a href="shop-page.html">Salmon fishs</a></li>
                                                        <li><a href="shop-page.html">Peanut Butter</a></li>
                                                        <li><a href="shop-page.html">Grapes & Raisins</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title">Cats Food</li>
                                                        <li><a href="shop-page.html">Meat</a></li>
                                                        <li><a href="shop-page.html">Fish</a></li>
                                                        <li><a href="shop-page.html">Eggs</a></li>
                                                        <li><a href="shop-page.html">Veggies</a></li>
                                                        <li><a href="shop-page.html">Cheese</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title">Fishs Food</li>
                                                        <li><a href="shop-page.html">Rice</a></li>
                                                        <li><a href="shop-page.html">Veggies</a></li>
                                                        <li><a href="shop-page.html">Cheese</a></li>
                                                        <li><a href="shop-page.html">wheat bran</a></li>
                                                        <li><a href="shop-page.html">Cultivation</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><a href="shop-page.html"><img alt="" src={menu_img_4}/></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">PAGES</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="about-us.html">about us</a>
                                                </li>
                                                <li>
                                                    <a href="shop-page.html">shop page</a>
                                                </li>
                                                <li>
                                                    <a href="shop-list.html">shop list</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">product details</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">cart page</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">contact us</a>
                                                </li>
                                                <li>
                                                    <a href="my-account.html">my account</a>
                                                </li>
                                                <li>
                                                    <a href="login-register.html">login / register</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="blog-leftsidebar.html">Blog</a>
                                            <ul className="submenu">
                                                <li>
                                                    <a href="blog.html">blog page</a>
                                                </li>
                                                <li>
                                                    <a href="blog-leftsidebar.html">blog left sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">blog details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">ABOUT</a></li>
                                        <li><a href="contact.html">contact us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-8 col-sm-8 col-7">
                            <div className="search-login-cart-wrapper">
                                <div className="header-search same-style">
                                    <button className="search-toggle">
                                        <i className="icon-magnifier s-open"></i>
                                        <i className="ti-close s-close"></i>
                                    </button>
                                    <div className="search-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search"/>
                                            <button>
                                                <i className="icon-magnifier"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="header-login same-style">
                                    <a href="login-register.html"><i className="icon-user icons"></i></a>
                                </div>
                                <div className="header-cart same-style">
                                    <button className="icon-cart">
                                        <i className="icon-handbag"></i>
                                        <span className="count-style">02</span>
                                    </button>
                                    <div className="shopping-cart-content">
                                        <ul>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src={cart_1}/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Dog Calcium Food </a></h4>
                                                    <h6>Qty: 02</h6>
                                                    <span>$260.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="ti-close"></i></a>
                                                </div>
                                            </li>
                                            <li className="single-shopping-cart">
                                                <div className="shopping-cart-img">
                                                    <a href="#"><img alt="" src={cart_2}/></a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="#">Dog Calcium Food</a></h4>
                                                    <h6>Qty: 02</h6>
                                                    <span>$260.00</span>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="ti-close"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-total">
                                            <h4>Shipping : <span>$20.00</span></h4>
                                            <h4>Total : <span className="shop-total">$260.00</span></h4>
                                        </div>
                                        <div className="shopping-cart-btn">
                                            <a href="cart.html">view cart</a>
                                            <a href="checkout.html">checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-menu-area electro-menu d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                            <div className="mobile-menu">
                                <nav id="mobile-menu-active">
                                    <ul className="menu-overflow">
                                        <li><a href="#">HOME</a>
                                            <ul>
                                                <li><a href="index.html">home version 1</a></li>
                                                <li><a href="index-2.html">home version 2</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages</a>
                                            <ul>
                                                <li>
                                                    <a href="about-us.html">about us</a>
                                                </li>
                                                <li>
                                                    <a href="shop-page.html">shop page</a>
                                                </li>
                                                <li>
                                                    <a href="shop-list.html">shop list</a>
                                                </li>
                                                <li>
                                                    <a href="product-details.html">product details</a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">cart page</a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">checkout</a>
                                                </li>
                                                <li>
                                                    <a href="wishlist.html">wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">contact us</a>
                                                </li>
                                                <li>
                                                    <a href="my-account.html">my account</a>
                                                </li>
                                                <li>
                                                    <a href="login-register.html">login / register</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Food</a>
                                            <ul>
                                                <li><a href="#">Dogs Food</a>
                                                    <ul>
                                                        <li><a href="shop-page.html">Grapes and Raisins</a></li>
                                                        <li><a href="shop-page.html">Carrots</a></li>
                                                        <li><a href="shop-page.html">Peanut Butter</a></li>
                                                        <li><a href="shop-page.html">Salmon fishs</a></li>
                                                        <li><a href="shop-page.html">Eggs</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Cats Food</a>
                                                    <ul>
                                                        <li><a href="shop-page.html">Meat</a></li>
                                                        <li><a href="shop-page.html">Fish</a></li>
                                                        <li><a href="shop-page.html">Eggs</a></li>
                                                        <li><a href="shop-page.html">Veggies</a></li>
                                                        <li><a href="shop-page.html">Cheese</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Fishs Food</a>
                                                    <ul>
                                                        <li><a href="shop-page.html">Rice</a></li>
                                                        <li><a href="shop-page.html">Veggies</a></li>
                                                        <li><a href="shop-page.html">Cheese</a></li>
                                                        <li><a href="shop-page.html">wheat bran</a></li>
                                                        <li><a href="shop-page.html">Cultivation</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#">blog</a>
                                            <ul>
                                                <li>
                                                    <a href="blog.html">blog page</a>
                                                </li>
                                                <li>
                                                    <a href="blog-leftsidebar.html">blog left sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">blog details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html"> Contact us </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Navbar