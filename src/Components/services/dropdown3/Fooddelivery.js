import React from 'react'
import './Shoppingapp.css'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

const Fooddelivery = () => {
  return (
    <>
    <section>
    <div className='webdev11'>
           <div className='webdev111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2>Food Delivery 
                   <br></br> App Development</h2>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
               <img src='./images/pro5.jpg' alt='logo1'></img>
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
                    <h5>A client had a unique idea of delivering food with drinks. He did an acid test of his idea to deliver good food in the best way that is tough to get otherwise. When they started implementing idea through their web portal, they had a tremendous response due to their unique menu and food quality. They quickly decided to build a mobile application for android and ios.</h5>
                </div>

                <div>
                    <img src='./images/foodapp1.jpg' alt='img'></img>
                </div>
            </div>

            <div className='appcnt112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                
            <div>
                    <img src='./images/shop3.jpg' alt='img'></img>
                </div>
                <div>
                    <h1>The <span>Challenges</span></h1>
                                 <h5>We offered both ways the native development and cross-platform app development through Ionic Cordova. We both came to a common understanding and decided to use the Ionic Cordova Cross Platform mobile application as it is faster in development.</h5>
                </div>

            </div>

            <div className='appcnt113' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Solution</span></h1>
                          <h5>Online food delivery services (OFDS) are potentially impeding our progress toward the SDGs—impacting the way we eat, work, and care for the environment. Defined as “platform-to-consumer delivery operations” of ready-to-consume meals, OFDS offer delivery of a wide variety of takeout foods and beverages from kitchens to doorsteps</h5>
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

export default Fooddelivery