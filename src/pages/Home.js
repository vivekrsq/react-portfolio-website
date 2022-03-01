import React from 'react'

const Home = () => {
    return (
        <>
            <section className="banner_main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="text-bg">
                                <h1>Trusted and <br/>Professional Advisers</h1>
                                <span>for your Business</span>
                                <p>Showcase your Profile to the world using online CV builder and Get Hired Faster</p>
                                <a href="#">About us</a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <div className="ban_img">
                                <figure><img src="assets/images/ba_ing.png" alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end banner -->
   <!-- about section --> */}
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
                                <figure><img src="assets/images/about_img2.jpg" alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- about section -->
   <!-- service section --> */}
            <div id="service" className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="titlepage">
                                <h2><strong className="yellow">service</strong><br/> WE CAN HELP YOUR business GROW</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon1.png" alt="#" />
                                <h3>DIGITAL marketing</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon2.png" alt="#" />
                                <h3>FINANCIAL PLANING</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon3.png" alt="#" />
                                <h3>DIGITAL marketing</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon4.png" alt="#" />
                                <h3>BUSINESS CONSULTING</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon5.png" alt="#" />
                                <h3>MARKETING RESEARCH</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div id="ho_color" className="service_box">
                                <img src="assets/images/service_icon6.png" alt="#" />
                                <h3>UX RESEARCH</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and1500s, </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <a className="read_more" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        
   {/* <!-- service section -->
   <!-- portfolio --> */}
    <div className="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="titlepage">
                        <h2><strong className="yellow">PORTFOLIO</strong><br/> CHOOSE A PROFESSIONAL DESIGN</h2>
                        <span>Websites</span>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distrib</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="myCarousel" className="carousel slide portfolio_Carousel " data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-caption ">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf1.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf2.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf3.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf4.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a className="read_more" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf1.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf2.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf3.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf4.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a className="read_more" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf1.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf2.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf3.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="portfolio_img">
                                        <img src="assets/images/potf4.jpg" alt="#" />
                                        <div className="middle">
                                            <div className="text2">View More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a className="read_more" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
        </div>
    </div>
    {/* <!-- end portfolio section -->
   <!-- business  section --> */}
    <div className="business">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="titlepage">
                        <h2><strong className="yellow">CREATE</strong><br/>PERSONALISED Business</h2>
                        <p>ss normal distribution of letters, as opposed to using </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div id="ho_color" className="business_box">
                        <i><img src="assets/images/business_icon1.png" alt="#" /></i>
                        <h3>23</h3>
                        <p>NOMINATIONS </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div id="ho_color" className="business_box">
                        <i><img src="assets/images/business_icon2.png" alt="#" /></i>
                        <h3>31</h3>
                        <p>AGENCIES</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div id="ho_color" className="business_box">
                        <i><img src="assets/images/business_icon3.png" alt="#" /></i>
                        <h3>7</h3>
                        <p>AWARDS</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div id="ho_color" className="business_box">
                        <i><img src="assets/images/business_icon4.png" alt="#" /></i>
                        <h3>8</h3>
                        <p>Supported </p>
                    </div>
                </div>
                <div className="col-md-12">
                    <a className="read_more" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end business  section -->
   <!-- team  section --> */}
    <div id="team" className="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2><strong className="yellow">Team</strong><br/>We Have a Professional Team of Business Analysts.</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="team" className="carousel slide team_Carousel " data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#team" data-slide-to="0" className="active"></li>
                            <li data-target="#team" data-slide-to="1"></li>
                            <li data-target="#team" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="carousel-caption ">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team1.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team2.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 d_none1">
                                                <div id="ho_bg" className="team_img ">
                                                    <img src="assets/images/team3.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
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
                                            <div className="col-md-4 col-sm-6 d_none1">
                                                <div id="ho_bg" className="team_img ">
                                                    <img src="assets/images/team1.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team2.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team3.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
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
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team1.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6 d_none1">
                                                <div id="ho_bg" className="team_img ">
                                                    <img src="assets/images/team2.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div id="ho_bg" className="team_img">
                                                    <img src="assets/images/team3.png" alt="#" />
                                                    <div className="ho_socal">
                                                        <ul className="social_icont">
                                                            <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li> <a href="#"> <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                            <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#team" role="button" data-slide="prev">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </a>
                        <a className="carousel-control-next" href="#team" role="button" data-slide="next">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- end team  section -->
   <!-- testimonial --> */}
    <div id="client" className="testimonial">
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
                                        <i><img src="assets/images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
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
                                        <i><img src="assets/images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
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
                                        <i><img src="assets/images/cos.jpg" alt="#" /></i> <span>Consectetur</span>
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
    {/* <!-- end testimonial -->
   <!-- contact  section --> */}
    <div id="contact" className="contact ">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="titlepage">
                        <h2><strong className="yellow">Contact us</strong><br/>Request a call back</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form id="post_form" className="contact_form">
                        <div className="row">
                            <div className="col-md-12 ">
                                <input className="contact_control" placeholder=" Name" type="type" name="Name" />
                            </div>
                            <div className="col-md-12">
                                <input className="contact_control" placeholder="Email" type="type" name="Email" />
                            </div>
                            <div className="col-md-12">
                                <input className="contact_control" placeholder="Phone Number " type="type" name="Phone Number " />
                            </div>
                            <div className="col-md-12">
                                <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                            </div>
                            <div className="col-md-12">
                                <button className="send_btn">Send</button>
                            </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Home