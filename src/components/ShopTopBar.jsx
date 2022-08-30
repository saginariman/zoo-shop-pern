import React from 'react'

const ShopTopBar = () => {
  return (
    <div class="shop-topbar-wrapper">
        <div class="product-sorting-wrapper">
            <div class="product-show shorting-style">
                <label>Showing <span>1-20</span> of <span>100</span> Results</label>
                <select>
                    <option value="">12</option>
                    <option value="">24</option>
                    <option value="">36</option>
                </select>
            </div>
        </div>
        <div class="grid-list-options">
            <ul class="view-mode">
                <li class="active"><a href="#product-grid" data-view="product-grid"><i class="ti-layout-grid4-alt"></i></a></li>
                <li><a href="#product-list" data-view="product-list"><i class="ti-align-justify"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default ShopTopBar