import ProductCard from "./ProductCard"


const RelatedProductList = () => {
  return (
    <div className="related-product-area pt-95 pb-80 gray-bg">
        <div className="container">
            <div className="section-title text-center mb-55">
                <h4>Most Populer</h4>
                <h2>Related Products</h2>
            </div>
            <div className="related-product-active owl-carousel">
                {[1, 2, 3, 4].map((item, index) => 
                    <ProductCard key={item}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default RelatedProductList