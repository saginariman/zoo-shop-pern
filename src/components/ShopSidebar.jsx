import img1 from "../assets/img/blog/blog-s1.jpg";

const ShopSidebar = () => {
  return (
    <div className="shop-sidebar blog-mrg">
        <div className="shop-widget">
            <h4 className="shop-sidebar-title">Search Products</h4>
            <div className="shop-search mt-25 mb-50">
                <form className="shop-search-form">
                    <input type="text" placeholder="Find a product"/>
                    <button type="submit">
                        <i className="icon-magnifier"></i>
                    </button>
                </form>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Food Category </h4>
                <div className="shop-list-style mt-20">
                <ul>
                    <li><a href="#">Canned Food</a></li>
                    <li><a href="#">Dry Food</a></li>
                    <li><a href="#">Food Pouches</a></li>
                    <li><a href="#">Food Toppers</a></li>
                    <li><a href="#">Fresh Food</a></li>
                    <li><a href="#">Frozen Food</a></li>
                </ul>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Top Brands </h4>
                <div className="shop-list-style mt-20">
                <ul>
                    <li><a href="#">Authority</a></li>
                    <li><a href="#">AvoDerm Natural</a></li>
                    <li><a href="#">Bil-Jac</a></li>
                    <li><a href="#">Blue Buffalo</a></li>
                    <li><a href="#">Castor & Pollux</a></li>
                </ul>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Tags </h4>
                <div className="shop-list-style mt-20">
                <ul>
                    <li><a href="#">Food </a></li>
                    <li><a href="#">Fish </a></li>
                    <li><a href="#">Dog </a></li>
                    <li><a href="#">Cat  </a></li>
                    <li><a href="#">Pet </a></li>
                </ul>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Health Consideration </h4>
                <div className="shop-list-style mt-20">
                <ul>
                    <li><a href="#">Bone Development <span>18</span></a></li>
                    <li><a href="#">Digestive Care <span>22</span></a></li>
                    <li><a href="#">General Health <span>19</span></a></li>
                    <li><a href="#">Hip & Joint  <span>41</span></a></li>
                    <li><a href="#">Immune System  <span>22</span></a></li>
                </ul>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Nutritional Option </h4>
                <div className="shop-list-style mt-20">
                <ul>
                    <li><a href="#">Grain Free  <span>18</span></a></li>
                    <li><a href="#">Natural <span>22</span></a></li>
                </ul>
            </div>
        </div>
        <div className="shop-widget mt-50">
            <h4 className="shop-sidebar-title">Recent Post</h4>
            <div className="recent-post-wrapper mt-25">
                {[1, 2, 3].map((item, index) =>
                    <div className="single-recent-post mb-20" key={item}>
                        <div className="recent-post-img">
                            <a href="#"><img src={img1} alt=""/></a>
                        </div>
                        <div className="recent-post-content">
                            <h4><a href="#">My Dog, Aren</a></h4>
                            <span>April 19, 2018 </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ShopSidebar