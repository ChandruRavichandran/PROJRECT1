import React from 'react'

// import { Link } from 'react-router-dom'

import Security from '../security'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

import Third from '../../common/third';


const Mobdev = () => {
  return (
    <>
    
    <section className='webdev1'>

<div className='webdev11'>
   <div className='webdev111'  data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
        <h2>Mobile App Development Services</h2>
        <h4>Our Agile and cross functional teams deliver user centric & optimized custom mobile apps with delightful UX. As a top Mobile App Development Services, we create scalable apps that can release features faster for both iOS and Android.</h4>
      
       <div className='webdev1111'>
        <div><img src='./images/logo2.png'></img></div>
        <div><h5>Would you like to know more about mobile application Development Services?</h5>
           <button>BOOK A CALL</button></div>
       </div>

   </div>

   <div className='webdev112'  >
       <img src='./images/serimg2.jpg'></img>
   </div>
   </div>


  


</section>

    <section>
    <div className='webdev2'>
            <div className='webdev21'  data-aos="fade-right">
               <img src='./images/mobdev.jpg'></img>
            </div>
             <div className='webdev22'  data-aos="fade-left">
                  <h2>Expand your business with <span>custom web development services</span></h2>
                   <h4>Finding a web development partner is easy to build a successful digital product, but choosing the best is crucial. At TechAvidus, we apply the best tech solutions to create a secure and stable app that delivers an exceptional user experience.</h4>
             </div>
           </div>
    </section>
    <Third/>
    <Security/>
    <Technologies/>    <Footer/>
    </>
  )
}

export default Mobdev