import React from 'react'
import Security from '../security'
import Third from '../../common/third'
import Technologies from '../technologies'
import Footer from "../../Footer/Footer";

const swtsting = () => {
  return (
    <>
    <section className='webdev1'>

        <div className='webdev11'>
           <div className='webdev111'  data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2>SoftWare Testing</h2>
                <h4>Transform your business with creative and cost-effective custom software solutions..</h4>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112'  >
               <img src='./images/serimg5.jpg' alt='logo1'></img>
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

export default swtsting