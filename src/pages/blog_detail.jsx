import BlogCommentWrapper from '../components/BlogCommentWrapper'
import BreadCrump from '../components/BreadCrump'
import CommentForm from '../components/CommentForm'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import ShopSidebar from '../components/ShopSidebar'
import SingleBlogWrapper from '../components/SingleBlogWrapper'

const BlogDetail = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="container mt-3">
            <div className="row flex-row-reverse">
                <div className="col-lg-9 col-md-8">
                    <div className="blog-details-wrapper res-mrg-top">
                        <SingleBlogWrapper/>
                        <BlogCommentWrapper/>
                        <CommentForm/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4">
                    <ShopSidebar/>
                </div>
            </div>
        </div>
        <Footer/>
        <Modal/>
    </div>
  )
}

export default BlogDetail