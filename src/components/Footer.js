import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <a className="logo2" href="#"><img src="assets/images/loogo2.png" alt="#" /></a>
               </div>
               <div className="col-lg-5 col-md-6 col-sm-6">
                  <h3>Contact Us</h3>
                  <ul className="location_icon">
                     <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a> London 145
                        <br/> United Kingdom
                     </li>
                     <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>demo@gmail.com<br/> demo@gmail.com</li>
                     <li><a href="#"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></a>+01 1234567890<br/>+01 1234567889</li>
                  </ul>
                  <ul className="social_icon">
                     <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                     <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                     <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                     <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <h3>Menus</h3>
                  <ul className="link_icon">
                     <li className="active"> <Link to="/"> Home</Link></li>
                     <li><Link to="about">About</Link></li>
                     <li> <Link to="/service"> Services</Link></li>
                     <li> <Link to="/team"> Team</Link></li>
                     <li> <Link to="/client"> Clients</Link></li>
                     <li> <Link to="/contact"> Contact Us</Link></li>
                     
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <h3>Recent Post</h3>
                  <ul className="link_icon">
                     <li> <a href="#"> Participate in staff </a></li>
                     <li>
                        <a href="#"/>
                           meetings manage
                     </li>
                     <li> <a href="#"> dedicated to </a></li>
                     <li> <a href="#"> marketing</a></li>
                     <li> <a href="#"> November 25, 2019</a></li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <h3>Newsletter</h3>
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="news" placeholder="Your Email" type="type" name="Your Email"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <p>© 2019 All Rights Reserved.<a href="https://html.design/"> Free html Templates</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </>
  )
}

export default Footer