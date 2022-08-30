import React from 'react'
import '../assets/css/blog-area.css'
import BlogCard from './BlogCard';

const BlogArea = () => {
  return (
    <div className="blog-area pb-70">
        <div className="container">
            <div className="section-title text-center mb-60">
                <h4>Latest News</h4>
                <h2>From Our Blog</h2>
            </div>
            <div className="row">
                {[1, 2, 3].map((item, index) => 
                    <div className="col-lg-4 col-md-6" key={item}>
                        <BlogCard/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default BlogArea