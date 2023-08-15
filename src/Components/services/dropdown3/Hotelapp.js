import React from 'react'
import './Shoppingapp.css'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

const Hotelapp = () => {
  return (
    <>
    <section>
    <div className='webdev11'>
           <div className='webdev111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2> Hotel Management System</h2>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
               <img src='./images/pro2.jpg' alt='logo1'></img>
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
                    <h5>Hotel management can be a herculean task if not managed efficiently. An online hotel management system software which can systematically maintain the customers’ services, meanwhile train the hotel management students for success was indeed the need of the hour. Our client approached the team with a vision of a web-based hotel booking software, which can also fulfill the requirement of hotel management training program. The team of TechAvidus was ready to apply all its might to serve him the best.

</h5>
                </div>

                <div className='hotelapp1img'>
                    <img src='./images/hotelapp1.jpg' alt='img'></img>
                </div>
            </div>

            <div className='appcnt112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                
            <div >
                    <img src='./images/shop3.jpg' alt='img'></img>
                </div>
                <div>
                    <h1>The <span>Challenges</span></h1>
                    <h5>Hotel management can be a herculean task if not managed efficiently. An online hotel management system software which can systematically maintain the customers’ services, meanwhile train the hotel management students for success was indeed the need of the hour. Our client approached the team with a vision of a web-based hotel booking software, which can also fulfill the requirement of hotel management training program. The team of TechAvidus was ready to apply all its might to serve him the best.

</h5>
                </div>

            </div>

            <div className='appcnt113' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Solution</span></h1>
                  <h5>TechAvidus came across such a challenge to build an online hotel management software to elevate the success ratio of the hotel management students and in the way, enhance their skills through training. Along with this, the proposed solution also fulfills the requirement of an efficient hotel reservation management system.In the case of pre-booking, web-based hotel booking software sends a confirmation mail to the client informing him about the reserved room.</h5>
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

export default Hotelapp