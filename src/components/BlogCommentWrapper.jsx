import img1 from "../assets/img/blog/blog-comment1.png";
import "../assets/css/blog-comment-wrapper.css"

const BlogCommentWrapper = () => {
  return (
    <div className="blog-comment-wrapper mt-55">
        <h4 className="blog-dec-title">comments : 02</h4>
        <div className="single-comment-wrapper mt-35">
            <div className="blog-comment-img">
                <img src={img1} alt=""/>
            </div>
            <div className="blog-comment-content">
                <h4>Anthony Stephens</h4>
                <span>October 14, 2018 </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                <div className="blog-details-btn">
                    <a href="blog-details.html">read more</a>
                </div>
            </div>
        </div>
        <div className="single-comment-wrapper mt-50 ml-125">
            <div className="blog-comment-img">
                <img src={img1} alt=""/>
            </div>
            <div className="blog-comment-content">
                <h4>Anthony Stephens</h4>
                <span>October 14, 2018 </span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, </p>
                <div className="blog-details-btn">
                    <a href="blog-details.html">read more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCommentWrapper