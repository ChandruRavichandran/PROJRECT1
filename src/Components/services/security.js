import React from 'react'
import './security.css'
// import { Link } from 'react-router-dom'


const security = () => {
  return (
<>
<div className='sec1' >
   <div className='sec11'>
    <h1>We Consider All Facets Of <span>Security</span> </h1>
   </div>
   <div className='sec12'>
    
    <div className='sec121' data-aos="flip-left">
       <img src='./icons/secur1.png' alt='logo'></img>
       <h2>Application Security</h2>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"> </i> Source code analysis</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Application architecture review</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Vulnerability scan</h5>
       <h5><i class="fa fa-check-circle-o" aria-hidden="true"></i> Attack vectors identification</h5>
    </div>

    <div className='sec121' data-aos="flip-left">
       <img src='./icons/secur2.png' alt='logo'></img>
       <h2> Data Security</h2>
       <h5><i class="fa fa-check-circle-o" aria-hidden="true"></i> Data leak prevention</h5>
       <h5><i class="fa fa-check-circle-o" aria-hidden="true"></i> Endpoint protection</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Compliance with industry standards</h5>
       <h5><i class="fa fa-check-circle-o" aria-hidden="true"></i> Encryption of data in transit and data at rest</h5>
    </div>

    <div className='sec121' data-aos="flip-left">
       <img src='./icons/secur3.png' alt='logo'></img>
       <h2> Customer Security</h2>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Segregated project infrastructure</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> SLA guarantees</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Security & IP protection policies</h5>
       <h5> <i class="fa fa-check-circle-o" aria-hidden="true"></i> Software pre-certification support</h5>
    </div>

   

   </div>
</div>
</>  )
}

export default security