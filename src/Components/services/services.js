import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
 import './services.css'
 
const Services = () => {
  return (
    <>
    <section className="fullpage">
  <div className="container3">
     <div className='container31' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">

      <div className='container311'>
         <h1>Our <br></br>Services</h1>
         
      </div >

      <div className='container312'>
        <h3>Kitkat Solfware Solutions</h3>
      </div> 

      <div className='container313'>
        <button><Link to="/services1"  class="btn btn-outline-primary"><span>Read More</span></Link></button>
        {/* <li><Link to="/about"  className="nav-link scrollto" ><span>About</span> </Link></li> */}

      </div>

     </div>

    {/* second */}
    <div className='container32'  data-aos="zoom-in-up" data-aos-duration="1500">
      <img src='./images/service1.jpg'></img>
    </div>

  </div>
</section>

    </>
  )
}

export default Services