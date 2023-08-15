import React from 'react'
import './Services1.css'
import { Link } from 'react-router-dom'
import Technologies from './technologies'
import Security from './security'




const Services1 = () => {
  return (
    <>
    <section className='webdev1'>
<div className='we'>
<div className='webdev11'>
   <div className='webdev111'   data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">
        <h2>Kitkat Delivers</h2>
        <h4>Custom Software, Web and Mobile Applications

to startups, SMEs & Large Enterprises</h4>
      
       <div className='webdev1111'>
        <div><img src='./images/logo2.png' alt='logo'></img></div>
        <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
           <button>BOOK A CALL</button></div>
       </div>

   </div>

   <div className='webdev112'   data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">
       <img src='./images/wevdev2.jpg' alt='logo'></img>
   </div>
   </div>
   </div>

   


   <div className='ser2' >
     <div className='ser21'data-aos="fade-up" data-aos-duration="1500">
        <h2>What We Do For You?<span>Every Day.</span> </h2>
     </div>
     <div className='ser22' >
        <div className='ser221' data-aos="flip-right" data-aos-duration="1500">
        <i class="fa fa-laptop" aria-hidden="true"></i>
        <h4>ADVISORY</h4>
        <h4> <span>Your Reliable Partner</span></h4>
        <h4>Our qualified team guides and be with you in the transformation process, right from the ideas to implementation. We came a long way in gaining expertise in this field so that we can offer the best that suits your needs.</h4>

        </div>
        <div className='ser222' data-aos="flip-right" data-aos-duration="1500">
        <i class="fa fa-soundcloud" aria-hidden="true"></i>
        <h4>SOFTWARE SOLUTIONS</h4>
        <h4> <span>Your Technology Specialists</span> </h4>
        <h4>We provide scalable and quality IT solutions, modules, and packages that are carefully crafted and customized by our skilled professionals. We take care of every single detail of your needs, so you get only / more than what you desire.</h4>
        </div>
        <div className='ser223' data-aos="flip-right" data-aos-duration="1500">
        <i class="fa fa-book" aria-hidden="true"></i>
        <h4>APPLICATION MANAGEMENT</h4>
        <h4>  <span>Your Global Delivery Workforce</span></h4>
        <h4>We offer maintenance, customization and application development services both onsite and offsite.</h4>
        </div>
     </div>
   </div>


   <div className='ser3'  >
      <div data-aos="fade-up" data-aos-duration="1500"><h1> <span>Services </span>we offer</h1></div>
        <div className='ser31'>
         
           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser1.png' alt='logo'></img>
             <h2>Custom Software Development</h2>
             <h5>Custom software development services for startups, small-to-midsize (SMB), and enterprise-size businesses.</h5>
            <button><Link>READ MORE</Link></button>
           </div>
          
           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser2.png' alt='logo'></img>
             <h2>   Web Application Development</h2>
             <h5>In Development Services Company that helps businesses by developing high-performing and secure web applications.</h5>
             <button><Link>READ MORE</Link></button>
           </div>

  

           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser3.png' alt='logo'></img>
             <h2>Cross <br></br>
              Platform Developmemt</h2>
             <h5>Build Native, Cross-Platform Apps for Desktop,<br></br > Web, <br></br >Mobile <br></br > & Raspberry Pi.</h5>
             <button><Link>READ MORE</Link></button>
           </div>


           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser4.png' alt='logo'></img>
             <h2>Mobile Application Development</h2>
             <h5>Creative,<br></br > secure, <br></br >and reliable mobile apps<br></br > for seamless experiences.</h5>
             <button><Link>READ MORE</Link></button>
           </div>


           

           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser5.png' alt='logo'></img>
             <h2>           E-Commerce Development</h2>
             <h5>Leading ecommerce app Development Services Company that builds custom ecommerce mobile applications & solutions for your business at a reasonable price.</h5>
             <button><Link>READ MORE</Link></button>
           </div>




           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser2.png' alt='logo'></img>
             <h2>           UI/UX <br></br >Desgin</h2>
             <h5>We design intuitive, engaging <br></br >& user-friendly <br></br >to create an <br></br >amazing digital experience <br></br >and <br></br >improving brand value.</h5>
             <button><Link>READ MORE</Link></button>
           </div>



           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser7.png' alt='logo'></img>
             <h2>Digital Marketingt</h2>
             <h5>The goal of digital marketing is to reach a target audience, build brand awareness,  drive traffic to a website, and, ultimately, convert prospects into customers.
</h5>
             <button><Link>READ MORE</Link></button>
           </div>






           <div className='ser311' data-aos="flip-right" data-aos-duration="1500">
            <img src='./icons/ser8.png' alt='logo'></img>
             <h2>Get In Touch</h2>
             <h5>Would you like to know more about our Custom Software, Web and Mobile Application Development Services?
</h5>
             <button><Link>READ MORE</Link></button>
           </div>


         



        </div>
   </div>


</section>
<Technologies/>
<Security/>
    </>
  )
}

export default Services1