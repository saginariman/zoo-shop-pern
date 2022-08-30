import "../assets/css/project-count-area.css"

const ProjectCountArea = () => {
  return (
    <div className="project-count-area pb-70 pt-100 gray-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="single-count mb-30 text-center">
                        <h2 className="count">18</h2>
                        <span>Years in Business</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="single-count mb-30 text-center">
                        <h2 className="count">290</h2>
                        <span>Happy People</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="single-count mb-30 text-center">
                        <h2 className="count">24</h2>
                        <span>Billion Sales</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <div className="single-count mb-30 text-center">
                        <h2 className="count">17</h2>
                        <span>Award Winning</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCountArea