
const CartTax = () => {
  return (
    <div className="cart-tax">
        <h4 className="cart-bottom-title">Estimate Shipping And Tax</h4>
        <div className="tax-wrapper">
            <p>Enter your destination to get a shipping estimate.</p>
            <div className="tax-select-wrapper">
                <div className="tax-select">
                    <label>
                        Country
                    </label>
                    <select className="email s-email s-wid">
                        <option>Bangladesh</option>
                        <option>Albania</option>
                        <option>Åland Islands</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                    </select>
                </div>
                <div className="tax-select">
                    <label>
                        State/Province
                    </label>
                    <select className="email s-email s-wid">
                        <option>Bangladesh</option>
                        <option>Albania</option>
                        <option>Åland Islands</option>
                        <option>Afghanistan</option>
                        <option>Belgium</option>
                    </select>
                </div>
                <div className="tax-select">
                    <label>
                        Zip/Postal Code
                    </label>
                    <input type="text" placeholder="1234567"/>
                </div>
                <button className="cart-btn-2" type="submit">Get A Quote</button>
            </div>
        </div>
    </div>
  )
}

export default CartTax