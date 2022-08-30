import BreadCrump from '../components/BreadCrump'
import CartDiscount from '../components/CartDiscount'
import CartTable from '../components/CartTable'
import CartTax from '../components/CartTax'
import Footer from '../components/Footer'
import GrandTotal from '../components/GrandTotal'
import Navbar from '../components/Navbar'
import TableBtns from '../components/TableBtns'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <h3 className="page-title">Your cart items</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form action="#">
                            <CartTable/>
                            <div className="row">
                                <div className="col-lg-12">
                                    <TableBtns/>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <CartTax/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <CartDiscount/>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <GrandTotal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart