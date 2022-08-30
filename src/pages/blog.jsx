import React from 'react'
import BlogCard from '../components/BlogCard'
import BreadCrump from '../components/BreadCrump'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="blog-area pt-100 pb-100 clearfix">
            <div className="container">
                <div className="row">
                    {[1, 2, 3, 4].map((item, index) =>
                        <div className="col-lg-6 col-md-6" key={item}>
                            <BlogCard/>
                        </div>
                    )}
                </div>
                <Pagination/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog