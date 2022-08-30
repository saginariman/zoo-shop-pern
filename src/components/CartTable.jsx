import img1 from "../assets/img/cart/cart-3.jpg";
import "../assets/css/cart-table.css"

const CartTable = () => {
  return (
    <div className="table-content table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Until Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4].map((item, index) => 
                    <tr key={item}>
                        <td className="product-thumbnail">
                            <a href="#"><img src={img1} alt=""/></a>
                        </td>
                        <td className="product-name"><a href="#">Dry Dog Food</a></td>
                        <td className="product-price-cart"><span className="amount">$110.00</span></td>
                        <td className="product-quantity">
                            <div className="cart-plus-minus">
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="02"/>
                            </div>
                        </td>
                        <td className="product-subtotal">$110.00</td>
                        <td className="product-remove"><a href="#"><i className="ti-trash"></i></a></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default CartTable