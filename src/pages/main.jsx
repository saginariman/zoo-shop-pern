import React from 'react'
import BlogArea from '../components/BlogArea'
import DealArea from '../components/DealArea'
import FoodsCategory from '../components/FoodsCategory'
import Footer from '../components/Footer'
import MainSlider from '../components/MainSlider'
import Navbar from '../components/Navbar'
import ProductArea from '../components/ProductArea'
import ServiceArea from '../components/ServiceArea'
import Testimonals from '../components/Testimonals'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <MainSlider/>
        <FoodsCategory/>
        <ProductArea/>
        <DealArea/>
        <Testimonals/>
        <ServiceArea/>
        <BlogArea/>
        <Footer/>
    </div>
  )
}

export default Main