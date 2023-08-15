import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
   
<section className="fullpage">
  <div className="container1">
     <div className='container11 ' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">

      <div className='container111'>
         <h1>About </h1>
         <h1>Us</h1>
      </div >

      <div className='container112'>
        <h3>Kitkat Solfware Solutions</h3>
      </div> 

      <div className='container113'>
        <button><Link to="/about1"  class="btn btn-outline-primary"><span>Read More</span></Link></button>
        {/* <li><Link to="/about"  className="nav-link scrollto" ><span>About</span> </Link></li> */}

      </div>

     </div>

    {/* second */}
    <div className='container12'  data-aos="zoom-in-up" data-aos-duration="1500">
      <img src='./images/aboutus1.jpg'></img>
    </div>

  </div>
</section>

    </>
  )
}

export default About