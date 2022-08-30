import img1 from "../assets/img/product/product-4.jpg";

const ProductCard = () => {
  return (
    <div className="product-wrapper">
        <div className="product-img">
            <a href="product-details.html">
                <img src={img1} alt=""/>
            </a>
            <div className="product-action">
                <a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                    <i className="ti-plus"></i>
                </a>
                <a title="Add To Cart" href="#">
                    <i className="ti-shopping-cart"></i>
                </a>
            </div>
            <div className="product-action-wishlist">
                <a title="Wishlist" href="#">
                    <i className="ti-heart"></i>
                </a>
            </div>
        </div>
        <div className="product-content">
            <h4><a href="product-details.html">Dog Calcium Food</a></h4>
            <div className="product-price">
                <span className="new">$20.00 </span>
                <span className="old">$50.00</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard