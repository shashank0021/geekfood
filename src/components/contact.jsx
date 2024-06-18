import React from 'react'
import './contact.css'

function contact() {


  return (
    <div className="container-contact">
        <div className="content">
          <div className="contact">
            <h3>Contact Us</h3>
            <h1>GET IN TOUCH WITH US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
          </div>
          <div className="info">
            <div className='in'>
            <strong>Our Location</strong>
              <p>99 S.t Jomblo Park Pekanbaru 28292.<br/> Indonesia</p>
            </div>
            <div className='in'>
              <strong>Phone Number</strong>
              <p>(+62)81 414 257 9980</p>
            </div>
            <div className='in'>
              <strong>Email Address</strong>
              <p>info@yourdomain.com</p>
            </div>
        </div>

        

        </div>
        <div className="form">

          <form>
            <input type='text' placeholder='Your Name' /><br/>
            <input type='email' placeholder='Your Email' /><br/>
            <input type='tel' placeholder='Your Number' /><br/>
            <textarea placeholder='Comment' rows='5'/><br/>
            <input type='submit' value='submit'></input>

          </form>
        </div>
        <span></span>

    </div>
    
    
  )
}

export default contact