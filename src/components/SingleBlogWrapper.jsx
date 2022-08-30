import img1 from "../assets/img/blog/blog-details.jpg";
import img2 from "../assets/img/blog/blog-dec-img1.jpg";
import img3 from "../assets/img/blog/blog-dec-img2.jpg";
import "../assets/css/single-blog-wrapper.css";

const SingleBlogWrapper = () => {
  return (
    <div class="single-blog-wrapper">
        <div class="blog-img mb-30">
            <img src={img1} alt=""/>
        </div>
        <div class="blog-details-content">
            <h2>new shop collection our shop</h2>
            <div class="blog-meta">
                <ul>
                    <li>May - 14.09.2018 </li>
                    <li>
                        <a href="#"> 02 Comments</a>
                    </li>
                </ul>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum.</p>
        <blockquote class="importent-title">
            <h4>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.</h4>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit.</p>
        <div class="dec-img-wrapper">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="dec-img">
                        <img src={img2} alt=""/>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="dec-img dec-mrg res-mrg-top-2">
                        <img src={img3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ull laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat to nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est to laborum.</p>
        <div class="blog-dec-tags-social">
            <div class="blog-dec-tags">
                <ul>
                    <li><a href="#">Dog</a></li>
                    <li><a href="#">Cat</a></li>
                    <li><a href="#">Fish</a></li>
                </ul>
            </div>
            <div class="blog-dec-social">
                <span>share :</span>
                <ul>
                    <li><a href="#"><i class="icon-social-twitter"></i></a></li>
                    <li><a href="#"><i class="icon-social-instagram"></i></a></li>
                    <li><a href="#"><i class="icon-social-dribbble"></i></a></li>
                    <li><a href="#"><i class="icon-social-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogWrapper