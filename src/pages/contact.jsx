import React from 'react'
import BreadCrump from '../components/BreadCrump'
import CommentForm from '../components/CommentForm'
import ContactCard from '../components/ContactCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="contact-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    {[1, 2, 3].map((item, index) =>
                        <div className="col-lg-4 col-md-6 col-12">
                            <ContactCard/>
                        </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-12">
                        <CommentForm/>
                    </div>
                </div>
                <div className="contact-map">
                    <div id="map"></div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact