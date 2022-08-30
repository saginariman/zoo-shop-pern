import '../assets/css/food-category.css'
import product_1 from "../assets/img/product/product-1.jpg";
import product_2 from "../assets/img/product/product-2.jpg";
import product_3 from "../assets/img/product/product-3.jpg";

const FoodsCategory = () => {
  return (
    <div className="food-category food-category-col pt-100 pb-60">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="single-food-category cate-padding-1 text-center mb-30">
                        <div className="single-food-hover-2">
                            <img src={product_1} alt=""/>
                        </div>
                        <div className="single-food-content">
                            <h3>Dogs Food</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single-food-category cate-padding-2 text-center mb-30">
                        <div className="single-food-hover-2">
                            <img src={product_2} alt=""/>
                        </div>
                        <div className="single-food-content">
                            <h3>Cats Food</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="single-food-category cate-padding-3 text-center mb-30">
                        <div className="single-food-hover-2">
                            <img src={product_3} alt=""/>
                        </div>
                        <div className="single-food-content">
                            <h3>Fishs Food</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FoodsCategory