import React, { Component } from 'react';
import Logo from '../images/applogo.png';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
               <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="widget clearfix">
                        <div id="footer-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <br></br>
                        <p> Please do not hesitate to contact me if I can be of any further assistance, 
                             provide further information on this matter. If you require any further information, 
                             assistance, please feel free to contact me,
                            let me know. Please let me know if you have any further questions, issues on this matter.</p>
                    </div>
                </div>

				<div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Pages</h3>
                        </div>

                        <ul class="footer-links hov">
                            <li><Link to="/" >Home <span class="icon icon-arrow-right2"></span></Link></li>
							<li><Link to="/Components/EClub" >Membership <span class="icon icon-arrow-right2"></span></Link></li>
							<li><Link to="" >Services <span class="icon icon-arrow-right2"></span></Link></li>
							<li><Link to="" >About <span class="icon icon-arrow-right2"></span></Link></li>
							<li><Link to="" >Help <span class="icon icon-arrow-right2"></span></Link></li>
							<li><Link to="" >Contact <span class="icon icon-arrow-right2"></span></Link></li>
                        </ul>
                    </div>
                </div>
				
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="footer-distributed widget clearfix">
                        <div class="widget-title">
                            <h3>Subscribe</h3>
							<p>For any Query to contact me if I can be of any further assistance, 
                             provide further information on this matter. If you require any further information, 
                             assistance, please feel free to contact me,
                            let me know. Please let me know if you have any further questions.</p>
                        </div>
						
						<div class="footer-right">
							<form method="get" action="#">
								<input placeholder="Subscribe our newsletter.." name="search"/>
								<i class="fa fa-envelope-o"></i>
							</form>
						</div>                        
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div class="verybottom">
              <div className="span12">
                <div class="aligncenter">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <p>Flat NO. 3 oppiste side of National Textile University first gate Near Gujjar Ideal Shakhupora Road Manawala Faisalabad.
                      <br></br>
                      +92 303 9351580
                      <br></br>
                      usamajaved102@gmail,comm
                    </p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      <div>
                      <ul className="list__inline__item">
                      <li>
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-facebook" aria-hidden="true" 
                                            id="ourteam-icons">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-twitter" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-instagram" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-google-plus" aria-hidden="true">
                                        </i>
                                    </a>
                                </li>
                      </ul>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <p>
                      &copy; Mr. Usama - All right reserved
                    </p>
                        Designed by <a href="#" class="social-links">Usama Javed</a>
                    </div>
                  </div>
              </div>
              </div>
            </div>
      </div>
    </footer>
            </React.Fragment>
        )
    }
}
export default Footer;