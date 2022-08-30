import img1 from "../assets/img/blog/blog-4.jpg";

const BlogCard = () => {
  return (
    <div className="blog-wrapper mb-30 gray-bg">
      <div className="blog-img hover-effect">
          <a href="blog-details.html">
            <img alt="" src={img1}/>
          </a>
      </div>
      <div className="blog-content">
          <div className="blog-meta">
              <ul>
                  <li>By: <span>Admin</span></li>
                  <li>Sep 14, 2018</li>
              </ul>
          </div>
          <h4><a href="blog-details.html">Lorem ipsum dolor amet cons adipisicing elit</a></h4>
      </div>
  </div>
  )
}

export default BlogCard