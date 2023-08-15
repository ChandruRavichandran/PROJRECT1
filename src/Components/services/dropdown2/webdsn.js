import React from 'react'
import './webdev.css'
// import { Link } from 'react-router-dom'
import Security from '../security'
import Third from '../../common/third'
import Footer from "../../Footer/Footer";

import Technologies from '../technologies'

const Webdsn = () => {
  return (
    <>
    <section className='webdev1'>

        <div className='webdev11'>
           <div className='webdev111'>
                <h2>Website Designing</h2>
                <h4>We offer a <span> front-end, back-end, architecture, and DevOps. All-in-One package</span> to meet your business needs.</h4>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112'>
               <img src='./images/wevdev2.jpg' alt='logo1'></img>
           </div>
           </div>


           <div className='webdev2'>
            <div className='webdev21' data-aos="fade-right">
               <img src='./images/webdev3.jpg' alt='logo1'></img>
            </div>
             <div className='webdev22' data-aos="fade-left">
                  <h2>Expand your business with <span>custom web development services</span></h2>
                   <h4>Finding a web development partner is easy to build a successful digital product, but choosing the best is crucial. At TechAvidus, we apply the best tech solutions to create a secure and stable app that delivers an exceptional user experience.</h4>
             </div>
           </div>


           <div className='webdev3'>

           </div>
        
    </section>
    <Security/>
    <Third/>
    <Technologies/>
    <Footer/>
    </>
  )
}

export default Webdsn