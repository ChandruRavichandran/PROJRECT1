import React from 'react'
import './Shoppingapp.css'
import Footer from "../../Footer/Footer";
import Technologies from '../technologies';

const Shoppingapp = () => {
  return (
    <>
    <section>
    <div className='webdev11'>
           <div className='webdev111' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <h2> Online Shopping <br></br> App Development</h2>
              
               <div className='webdev1111'>
                <div><img src='./images/logo2.png' alt='logo'></img></div>
                <div><h5>Would you like to know more about our Custom Web App Development Services?</h5>
                   <button>BOOK A CALL</button></div>
               </div>

           </div>

           <div className='webdev112' data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
               <img src='./images/pro1.jpg' alt='logo1'></img>
           </div>
           </div>
    </section>
    <section>
    <div className='appcnt1'>
        <div className='appcnt11'>
            <div className='appcnt111 data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000"'>
                <div>
                    <h1>The <span>Concept</span></h1>
                    <h5>Shopping app development or e-commerce app development has been drawing wide-spread attention in the present. In the growing age of online shopping who does not like to shop from the comfort of one's drawing-room? At the same time, if a platform gives an option of selling one's stuff too, it will just be a cherry on the cake. Such an app/website can entertain multiple audiences because it's a simplified way to fulfill one's need quickly and efficiently.</h5>
                </div>

                <div>
                    <img src='./images/shop1.jpg' alt='img'></img>
                </div>
            </div>

            <div className='appcnt112 '  data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                
            <div>
                    <img src='./images/shop3.jpg' alt='img'></img>
                </div>
                <div>
                    <h1>The <span>Challenges</span></h1>
                    <h5>A client approached the team of kitkat with a need for shopping app development through which one can buy or sell products such as electronics, fashion, furniture, properties, automobiles, etc. on the website. The prime challenge before the team of TechAvidus was mapping the arbitrary requirements with the incomplete set of inputs (media, functionalities, etc.). We were headed towards building a full-fledged solution as a product of e-commerce app development.</h5>
                </div>

            </div>

            <div className='appcnt113'  data-aos="fade-up"
     data-aos-anchor-placement="center-center" data-aos-duration="1000">
                <div>
                    <h1>The <span>Solution</span></h1>
           <h5>A robust, secure, and a multi-functional system is developed as an outcome of an online shopping app design. The site allows the user to sell or buy the products effortlessly and swiftly. Any desired product can be quickly bid for and purchased. Additionally, the user can have a “ask price” feature for the product he/she wishes to sell. Once the buyer’s and seller’s price are matched then the transaction can be processed. The best part is, there is no third party involved, and a direct connection between buyer and seller is established.</h5>
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
              <div className='goal121' >
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

export default Shoppingapp