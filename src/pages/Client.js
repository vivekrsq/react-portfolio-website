import React from 'react'

const Client = () => {
  return (
    <>
    <div id="client"  className="testimonial">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2><strong className="yellow">testimonial</strong><br/>What is Syas our clients</h2>
                  </div>
               </div>
            </div>
         </div>
         <div id="testimo" className="carousel slide testimonial_Carousel " data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#testimo" data-slide-to="0" className="active"></li>
               <li data-target="#testimo" data-slide-to="1"></li>
               <li data-target="#testimo" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption ">
                        <div className="row">
                           <div className="col-md-6 offset-md-3">
                              <div className="test_box">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                 <i><img src="assets/images/cos.jpg" alt="#"/></i>         <span>Consectetur</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6 offset-md-3">
                              <div className="test_box">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                 <i><img src="assets/images/cos.jpg" alt="#"/></i>         <span>Consectetur</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6 offset-md-3">
                              <div className="test_box">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                 <i><img src="assets/images/cos.jpg" alt="#"/></i>         <span>Consectetur</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
         </div>
      </div>
    </>
  )
}

export default Client