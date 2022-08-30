import '../assets/css/product-area.css'
import ProductCard from './ProductCard';

const ProductArea = () => {
  return (
    <div className="product-area pt-95 pb-70 gray-bg">
        <div className="container">
            <div className="section-title text-center mb-55">
                <h4>Most Populer</h4>
                <h2>Recent Products</h2>
            </div>
            <div className="row">
                {[1,2,3,4,5,6,7,8].map((item, index) =>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item}>
                        <ProductCard/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProductArea