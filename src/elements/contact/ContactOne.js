import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <img className = "kakao-image" src = "./images/contactus/kakao.png"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">카카오톡 고객센터</h4>
                                        <p><a href="tel:+444 555 666 777">anysoft</a></p>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <img className = "kakao-image" src = "./images/contactus/telegram.jpg"/>
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">텔레그램 고객센터</h4>
                                        <p><a href="mailto:admin@gmail.com">@anysoftcokr</a></p>
                                        
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
                <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div>
            </div> */}
        </>
    )
}
export default ContactOne;