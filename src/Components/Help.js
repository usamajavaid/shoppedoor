import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
class Help extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='active-page'>
                <Header/>
                    <div class="contact-box-main" style={{marginTop:"200px"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-sm-12">
                                <div class="contact-form-right">
                                    <h2>GET IN TOUCH</h2>
                                    <p> Please do not hesitate to contact me if I can be of any further assistance, 
                             provide further information on this matter. If you require any further information, 
                             assistance, please feel free to contact me,
                            let me know. Please let me know if you have any further questions, issues on this matter.</p>
                                    <form id="contactForm">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name"/>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email"/>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject"/>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                                    <div class="help-block with-errors"></div>
                                                </div>
                                                <div class="submit-button text-center">
                                                    <button class="btn hvr-hover" id="submit" type="submit">Send Message</button>
                                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="contact-info-left">
                                    <h2>CONTACT INFO</h2>
                                    <p>For any query to contact me if I can be of any further assistance, 
                             provide further information on this matter. If you require any further information, 
                             assistance, please feel free to contact me,
                            let me know. Please let me know if you have any further questions, issues on this matter.</p>
                                    <ul>
                                        <li>
                                            <p><i class="fas fa-map-marker-alt"></i>&nbsp; Address: Manawala Sizing Stop <br/>&nbsp;&nbsp;Gujjar Street Flat NO.3</p>
                                        </li>
                                        <li>
                                            <p><i class="fas fa-phone-square"></i>&nbsp; Phone: <a href="tel:+1-888705770">+92 303 0351580</a></p>
                                        </li>
                                        <li>
                                            <p><i class="fas fa-envelope"></i>&nbsp; Email: <a href="mailto:contactinfo@gmail.com">usamajaved102@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Help;