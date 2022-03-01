import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     <header>
      {/* <!-- header inner --> */}
      <div className="header">
         <div className="header_to d_none">
            <div className="container">
               <div className="row">
                  <div className="col-md-6 col-sm-6">
                     <ul className="lan">
                        <li><i className="fa fa-globe" aria-hidden="true"></i> Language : <img src="assets/images/fleg.png" alt="#" /></li>
                     </ul>
                     <form action="#">
                        <div className="select-box">
                           <label for="select-box1" className="label select-box1"><span className="label-desc">English</span> </label>
                           <select id="select-box1" className="select">
                              <option value="Choice 1">English</option>
                              <option value="Choice 1">Falkla</option>
                              <option value="Choice 2">Germa</option>
                              <option value="Choice 3">Neverl</option>
                           </select>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6 col-sm-6 ">
                     <ul className="social_icon1">
                        <li> F0llow Us
                        </li>
                        <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                           </a>
                        </li>
                        <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_midil">
            <div className="container">
               <div className="row d_flex">
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon">
                        <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> Call Us : +01 1234567890</a> </li>
                     </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 ">
                     <a className="logo" href="#"><img src="assets/images/logo.png" alt="#" /></a>
                  </div>
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon ">
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_bo">
            <div className="container">
               <div className="row">
                  <div className="col-md-9 col-sm-7">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <Link className="nav-link" to="/"> Home </Link>
                              </li>
                              <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                              </li>
                              <li className="nav-item">
                              <Link className="nav-link" to="/service">Services</Link>
                              </li>
                              
                              <li className="nav-item">
                              <Link className="nav-link" to="/contact"> Contact us </Link>
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
                  <div className="col-md-3 col-sm-5 d_none">
                     <ul className="sign">
                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        <li><a className="sign_btn" href="#">sign up now</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
    </>
  )
}

export default Header