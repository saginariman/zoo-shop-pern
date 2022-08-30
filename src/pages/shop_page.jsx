import React from 'react'
import BreadCrump from '../components/BreadCrump'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'
import ShopSidebar from '../components/ShopSidebar'
import ShopTopBar from '../components/ShopTopBar'

const ShopPage = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div class="shop-area pt-100 pb-100 gray-bg">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <ShopTopBar/>
                        <div class="grid-list-product-wrapper">
                            <div class="product-view product-grid">
                                <div class="row">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) =>
                                        <div class="product-width col-lg-6 col-xl-4 col-md-6 col-sm-6" key={item}>
                                            <ProductCard/>
                                        </div>
                                    )}
                                </div>
                                <Pagination/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <ShopSidebar/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ShopPage