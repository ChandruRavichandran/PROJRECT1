import React from 'react'
import './Shoppingapp.css'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

const Flightticketapp = () => {
  return (
    <>
    <section>
    <div className='webdev11'>
           <div className='webdev111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2> Flight Booking Application</h2>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
               <img src='./images/pro4.jpg' alt='logo1'></img>
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
                    <h5>Till the time the client was managing flight reservations in the excel sheet and he wanted to develop the Flight ticket reservation system.

As client is offering his services all over the world, he wanted us to prepare multilingual solution. TechAvidus offered mobile responsive flight booking engine, which is highly effective and achieved the client’s objective.</h5>
                </div>

                <div className='pharimg1'>
                    <img src='./images/flightapp1.jpg' alt='img'></img>
                </div>
            </div>

            <div className='appcnt112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                
            <div>
                    <img src='./images/flightapp2.jpg' alt='img'></img>
                </div>
                <div>
                    <h1>The <span>Challenges</span></h1>
                 <h5>Book international flights from India to the UAE, Turkey, Sri Lanka, Canada, Switzerland, France, Spain, Germany, Maldives, Mauritius, the USA and more with ixigo to get cheap air tickets. We compare prices across a range of airlines to bring you the lowest flight ticket prices available. With ixigo, booking air tickets to international destinations is a hassle-free experience.</h5>
                </div>

            </div>

            <div className='appcnt113' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Solution</span></h1>
                <h5>Book international flights at lowest fares with leading airlines through ixigo. The user-friendly interface simplifies the booking process, with filters for number of stops, layover city, departure timings, and price range to narrow down search results. Get notified about fare drops with the 'Fare Alert' feature and set alerts for specific prices with daily or weekly emails. ixigo ensures affordable and hassle-free international flight ticket bookings.</h5>
                </div>

                <div>
                    <img src='./images/flightapp3.jpg' alt='img'></img>
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

export default Flightticketapp