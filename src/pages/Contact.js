import React from 'react'

const Contact = () => {
  return (
   <>
   <div id="contact" class="contact ">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2><strong class="yellow">Contact us</strong><br/>Request a call back</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-8 offset-md-2">
                  <form id="post_form" class="contact_form">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contact_control" placeholder=" Name" type="type" name="Name"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div class="col-md-12">
                           <input class="contact_control" placeholder="Phone Number " type="type" name="Phone Number "/>                          
                        </div>
                        <div class="col-md-12">
                           <textarea class="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn">Send</button>
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

export default Contact