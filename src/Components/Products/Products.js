import React from 'react'
import { Link } from 'react-router-dom'
// import Footer from '../Footer/Footer'l̥/l̥
 import './Products.css'
 
const Products = () => {
  return (
    <>
    <section className="fullpage">
  <div className="container2">
     <div className='container21'data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">

      <div className='container211'>
         <h1>Our <br></br>  Products</h1>
         <h1></h1>
      </div >

      <div className='container212'>
        <h3>Kitkat Solfware Solutions</h3>
      </div> 

      <div className='container213'>
        <button class="btn btn-outline-primary"><span>Read More</span></button>

      </div>

     </div>

    {/* second */}
    <div className='container22'  data-aos="zoom-in-up" data-aos-duration="1500">
      <img src='./images/product1.jpg'></img>
    </div>

  </div>
</section>
    </>
  )
}

export default Products