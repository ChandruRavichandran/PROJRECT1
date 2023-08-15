import React from 'react'
import {Link} from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <>
      <footer id="footer">
    <div className="footer-top">
      <div className="container"  data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Kitkat_Software_Solution</h3>
            <p>
              Lakshmi Mills 2nd Street <br/>
               Coimbatore<br/><br/>
        
            </p>
            <div id='icons' className="social-links mt-3">
              <Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link>
              <Link to="#" className="facebook"><i className="fa fa-facebook"></i></Link>
              <Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link>
            </div>
            <p>
          <strong>Phone:</strong> +1 9080 9108 71<br/>
              <strong>Email:</strong> kitkatsoftware@.com<br/>
              </p>
          </div>

         
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Products</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Services</h4>
            <ul>
              <li> <Link to="/">Product and service design</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Services</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Industries</h4>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Services</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Services</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li> <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Services</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li>

            </ul>
          </div>
        

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Services</h4>
            <ul>
              <li> <Link to="/">Product and service design</Link></li>
              <li> <Link to="/about">About us</Link></li>
              <li> <Link to="/services">Services</Link></li>
              <li> <Link to="/products">Terms of service</Link></li>
              <li> <Link to="/contact">Privacy policy</Link></li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>

  
 
   
<div>
 
 <div id='lastbox'>
<div class="d-flex justify-content-end ">
    <div><i class="fa fa-circle-o" aria-hidden="true"></i>  All rights reserved</div>
    <div >Terms of Use</div>
    <div >Privacy policy</div>
    <div >Site Map</div>
  </div>
  </div>
</div>


  </footer>


    </>
  )
}

export default Footer