import React from 'react'
import { Link } from 'react-router-dom'
import './About1.css'
import Footer from '../Footer/Footer'


const About1 = () => {
  return (
   <>
   <section className='about2' data-aos="fade-up" data-aos-duration="3000">
    <div className='about11'>

      <div className='about111'>
        <div className='about1111'>
        <img src='./images/aboutus2.jpg'></img>
        </div>
        <div className='about1112'>
        <i class="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </div>

      <div className="about112">
          <h2>About Us</h2>
          <h4>We Create, Design and Make it Real</h4>
          <p>Clients are made integral part of our team while executing the projects. This makes the audacious task of the software development and execution much simpler and easier, in tune with the client’s expectation.
          Agile software development is a set of principles for software development in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams.</p>
    </div>
    </div>
  
  <div className='about12'>
    <div className="about121" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="fa fa-laptop"></i></div>    
          <h1 className="title"><Link to="/website">Website</Link></h1>
          <p className="description">A website (also written as a web site) is a collection of web pages and related content that is identified by a common domain name and published on at least one web server.</p>
        </div>

        <div className="about122" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="fa fa-pencil"></i></div>
          <h1 className="title"><Link to="/website">Design</Link></h1>
          <p className="description">Design means to create a plan or sketch of something that is going to be made later, especially a plan that details what the finished thing will do and look like</p>
        </div>
  </div>
   </section>
   <Footer/>
    
   </>
    )
}

export default About1