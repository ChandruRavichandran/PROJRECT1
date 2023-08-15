import React from 'react'
// import { Link } from 'react-router-dom' 
import './Explore.css'


const Explore = () => {
  return (
    <> 
    <section className='explore1'>
      <div className='explore11'  data-aos="fade-up"
     data-aos-duration="3000">
            <h1>What We Do </h1>
            <h3>Have a look on our service, will be useful for you and helps to grow your business</h3>
      </div>
      <div className='explore12'  data-aos="fade-up"
     data-aos-duration="3000">

          <div className='explore121'>
              <div className='explore1211'>
                <img src='./images/explore1.jpg' alt='img'></img>
                <h2>WEB DESIGNING</h2>
                <h4>Design a professional website and attract your customer through your online presence and grow your business.</h4>
              </div>
              <div className='explore1211'>
              <img src='./images/explore2.jpg' alt='img'></img>
                <h2>SOFTWARE DEVELOPMENT</h2>
                <h4>We create Robust software programs to manage your business efficiently. Our software will surely save your time.</h4>
              </div>
          </div>

          <div className='explore122'>
              <div className='explore1212'>
                <img src='./images/portfolio3.jpg' alt='img'></img>
                <h2>MOBILE APPLICATION</h2>
                <h4>Mobile application development is growing rapidly, We are best mobile app development company in Coimbatore.</h4>
              </div>
              <div className='explore1212'>
              <img src='./images/explore4.jpg' alt='img'></img>
                <h2>ONLINE PROMOTIONS</h2>
                <h4>Advertising is changing day by day, make your advertising online and get an instant audience reach..</h4>
              </div>
          </div>

      </div>
    
    </section>
    
    </>
  )
}

export default Explore