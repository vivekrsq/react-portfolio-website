import React from 'react'

const About = () => {
  return (
    <>
     <div id="about" className="about">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12 col-lg-7">
                  <div className="about_box">
                     <div className="titlepage">
                        <h2><strong className="yellow">About US</strong><br/> WE CAN HELP YOUR business GROW</h2>
                     </div>
                     <h3>EVERYTHING YOU NEED IN ONE SOLUTION</h3>
                     <span>HELP YOUR NEXT CAREER MOVE MORE SMOOTHER AND <br/> MORE EFFICIENT</span>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of usingt</p>
                     <span className="try">TRY ONLINE CV BUILDER FOR Free</span>
                     <a className="read_morea" href="#">Get Started <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                  </div>
               </div>
               <div className="col-md-12 col-lg-5">
                  <div className="about_img">
                     <figure><img src="assets/images/about_img2.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About