import React from 'react'
import BreadCrump from '../components/BreadCrump'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MyAccount = () => {
  return (
    <div>
        <Navbar/>
        <BreadCrump/>
        <div className="my-account-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="checkout-wrapper">
                            <div id="faq" className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h5 className="panel-title"><span>1</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-1">Edit your account information </a></h5>
                                    </div>
                                    <div id="my-account-1" className="panel-collapse collapse show">
                                        <div className="panel-body">
                                            <div className="billing-information-wrapper">
                                                <div className="account-info-wrapper">
                                                    <h4>My Account Information</h4>
                                                    <h5>Your Personal Details</h5>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="billing-info">
                                                            <label>First Name</label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="billing-info">
                                                            <label>Last Name</label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="billing-info">
                                                            <label>Email Address</label>
                                                            <input type="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="billing-info">
                                                            <label>Telephone</label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="billing-info">
                                                            <label>Fax</label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="billing-back-btn">
                                                    <div className="billing-back">
                                                        <a href="#"><i className="ti-arrow-up"></i> back</a>
                                                    </div>
                                                    <div className="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h5 className="panel-title"><span>2</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-2">Change your password </a></h5>
                                    </div>
                                    <div id="my-account-2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <div className="billing-information-wrapper">
                                                <div className="account-info-wrapper">
                                                    <h4>Change Password</h4>
                                                    <h5>Your Password</h5>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="billing-info">
                                                            <label>Password</label>
                                                            <input type="password"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="billing-info">
                                                            <label>Password Confirm</label>
                                                            <input type="password"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="billing-back-btn">
                                                    <div className="billing-back">
                                                        <a href="#"><i className=" ti-arrow-up"></i> back</a>
                                                    </div>
                                                    <div className="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h5 className="panel-title"><span>3</span> <a data-toggle="collapse" data-parent="#faq" href="#my-account-3">Modify your address book entries   </a></h5>
                                    </div>
                                    <div id="my-account-3" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <div className="billing-information-wrapper">
                                                <div className="account-info-wrapper">
                                                    <h4>Address Book Entries</h4>
                                                </div>
                                                <div className="entries-wrapper">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                                            <div className="entries-info text-center">
                                                                <p>Gerald Armstrong </p>
                                                                <p> Address will go here. </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                                            <div className="entries-edit-delete text-center">
                                                                <a className="edit" href="#">Edit</a>
                                                                <a href="#">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="billing-back-btn">
                                                    <div className="billing-back">
                                                        <a href="#"><i className="ti-arrow-up"></i> back</a>
                                                    </div>
                                                    <div className="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
    </div>
  )
}

export default MyAccount