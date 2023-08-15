import React from 'react'
import './Pharmasyapp.css'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

const Pharmasyapp = () => {
  return (
    <>
    <section>
    <div className='webdev11'>
           <div className='webdev111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2> Pharmacy Management <br></br> Software </h2>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
               <img src='./images/pro3.jpg' alt='logo1'></img>
           </div>
           </div>
    </section>
    
    <section>
    <div className='appcnt1'>
        <div className='appcnt11'>
            <div className='appcnt111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Concept</span></h1>
                    <h5>There has been a significant spike in the world's population, and we have seen increased awareness about healthcare and fitness. The alertness towards one's health has led to an increase in the demand for medicines and various health-related products. Of course, so has the supply.

It is quite necessary to manage and deliver medicines based on complicated regulations of the pharmaceutical industry. It is a daunting task to manage huge inventories, take care of complex and custom workflows, accounting of pharma stocks, and streamlining with all the pharma stakeholders.

All these tasks are tough nuts to crack, and that is when a need arises for a Pharmacy Management Software System. So, if you want to streamline every day routines of the pharma industry, all you need is a customized Pharmacy Management Software Development.</h5>
                </div>

                <div className='pharimg1'>
                    <img src='./images/pharapp1.jpg' alt='img'></img>
                </div>
            </div>

            <div className='appcnt112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                
            <div>
                    <img src='./images/shop3.jpg' alt='img'></img>
                </div>
                <div>
                    <h1>The <span>Challenges</span></h1>
                    <h5>The client presented TechAvidus with its core pain points, such as management of centralized data storage and synchronization of real-time data in all necessary devices. The objective was to develop a custom Pharmacy Management Software for the client. TechaAvidus team faced severe challenges while implementing an advanced reporting system to track every pharma stock and execution of software-controlled packaging (serialization and automation).</h5>
                </div>

            </div>

            <div className='appcnt113' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Solution</span></h1>
                    <h5>Its came up with a stalwart pharmacy management system for the client by streamlining their complete workflow. A user-friendly system is built to ensure greater inventory accuracy. The pharmacy management software is backed with robust and quickly operable features that will automate the client's business, avoid expiries, and maximize profits significantly.</h5>
                </div>

                <div>
                    <img src='./images/shop4.jpg' alt='img'></img>
                </div>
            </div>

        </div>
    </div>
    
    </section>


    <section className='shopsection2'>
    <div className='webdev12' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
          <div className='goal11'>
            <h1>Features 
             <br></br> The<span> solution </span> developed by Kitkat</h1>
          </div>

          <div className='goal12'>
              <div className='goal121'>
                <img src='./icons/third1.png'></img>
                <h5>Easy Profile Setup/Update And Maintenance</h5>
              </div>

              <div className='goal121'>
                <img src='./icons/third2.png'></img>
                <h5>Easy Sign-Up And Easy Posting Of Their Advertisement</h5>
              </div>

              <div className='goal121'>
                <img src='./icons/third3.png'></img>
                <h5>User Portfolio Management</h5>
              </div>

              <div className='goal121'>
                <img src='./icons/third4.png'></img>
                <h5>Transaction History Records For Items Sold And Purchased</h5>
              </div>

              <div className='goal121'>
                <img src='./icons/third5.png'></img>
                <h5>Transaction Management</h5>
              </div>

              <div className='goal121'>
                <img src='./icons/third6.png'></img>
                <h5>User-Oriented Online Shopping App Design  </h5>
              </div>



          </div>
        </div>
        </section>
        <Technologies/>
        <Footer/>
    </>
  )
}

export default Pharmasyapp