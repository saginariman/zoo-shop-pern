import shipping from "../assets/img/icon-img/shipping.png";
import '../assets/css/service-area.css'

const ServiceArea = () => {
  return (
    <div className="service-area bg-img pt-100 pb-65">
        <div className="container">
            <div className="row">
                {[1, 2, 3].map((item, index) =>
                    <div className="col-lg-4 col-md-4" key={item}>
                        <div className="service-content text-center mb-30 service-color-1">
                            <img src={shipping} alt=""/>
                            <h4>FREE SHIPPING</h4>
                            <p>Free shipping on all order </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ServiceArea