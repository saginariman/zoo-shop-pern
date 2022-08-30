import React from 'react'

const CartDiscount = () => {
  return (
    <div className="discount-code-wrapper">
        <h4 className="cart-bottom-title">DISCOUNT CODES</h4>
        <div className="discount-code">
            <p>Enter your coupon code if you have one.</p>
            <form>
                <input type="text" required="" name="name"/>
                <button className="cart-btn-2" type="submit">Get A Quote</button>
            </form>
        </div>
    </div>
  )
}

export default CartDiscount