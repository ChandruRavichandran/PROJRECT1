import React from 'react'
import './Contact.css'
import Cntform from './Cntform'
import Cntsrt from './Cntsrt'
import Cntloc from './Cntloc'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
   <section className='cntus1'  data-aos="fade-up" data-aos-duration="3000">

  <div className='webdevA11'> 
           <div className='webdev111'>
                <h2>Have an Application or Want to Create One?</h2>
                <h4>Our solutions are tailored to our customer's business environments and existing technical architectures.</h4>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112'>
               <img src='./images/contactus1.jpg' alt='logo1'></img>
           </div>
           </div>

           
   
   </section>
   <Cntform/>
   <Cntsrt/>
   <Cntloc/>
   <Footer/>

   </>
  )
}

export default Contact