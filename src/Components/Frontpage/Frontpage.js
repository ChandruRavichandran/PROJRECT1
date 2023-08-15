import React from "react";
import "./Frontpage.css"
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom'
import Services1 from "../services/Services1";



function Frontpage() {
    return(
    <>
    <section>
        <div id="fullpage" >
            <div id="pageone">
                <div id="pageoneone"   data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
     data-aos-duration="1500">

                <h1 className="animate__animated animate__fadeInDown"><span>Kitkat_Software_Solutions <i><i class="fa fa-android" aria-hidden="true"></i></i></span></h1>
                    <h2 className="animate__animated animate__fadeInDown"><span>Your Software Development Outsourcing Partner</span></h2>
                    <h3 className="animate__animated animate__fadeInUp">     Accelerate your digital transformation, scale development efforts <span> flexibly and efficiently</span></h3>
                    <button class="btn btn-outline-primary">  <Link to="/explorehome">Explore</Link> </button>
                </div>
                <div id="pageonetwo" data-aos="zoom-in-up" data-aos-duration="1500">
               <img src="./images/frontpage1.jpg"  alt="img"></img>
               </div>
            </div>


             <br></br>
            <div id="pagetwo" >
                <h2 className="fw-bolder" data-aos="fade-up" data-aos-duration="1500">Problems We'll Help You Solve</h2>  
                <br></br>
                <div id="pagetwotwo" >
                <p id="para1" data-aos="fade-up-right" data-aos-duration="1500">
                    <h4  class="fw-normal"> <i class="fa fa-bell-o" aria-hidden="true"></i>  Fill your IT resourcing gaps with top experts</h4>
                    <br></br>
                    <h5 class="fw-lighter">KITKAT' talent pool comprises 2000+ multi-skilled experts covering  <span>a wide range of technological specialisms, with a firm grounding in maths and physics </span>– guaranteed to plug any skills gap. Our offshore software development team can partner with you at any stage of your SDLC and meet even the most complex technological challenge.</h5>
                </p>

                <p id="para2" data-aos="fade-up-left" data-aos-duration="1500">
                    <h4  class="fw-normal"> <i class="fa fa-bell-o" aria-hidden="true"></i>  Speed up delivery and reduce time-to-market</h4>
                    <br></br>
                    <h5 class="fw-lighter">When you outsource development, you’ll <span>meet your development goals twice as fast </span>compared with in-house development. We’ll translate your requirements and handle even the most complex software development tasks, so you can spend more time enhancing your core business and improving operational efficiency</h5>
                </p>
                </div>
             </div>


             {/* <div id="pagethree">

                  <div id="threeone">
                    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="600"
     data-aos-duration="5000">
                      <img src="./images/app dev1.jpg"></img>
                      </div>
                      <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="5000">
                      <h2>Mobile App Development</h2>
                      
                      <h5> Our recent App Development is to Coimbatore Civil Engineer Association. Dial Cocena is available in both Android and iOS Platform. If you are looking for mobile application development in Coimbatore.</h5>
                      </div>
                  </div>

                  <br></br>

                  <div id="threetwo">
                  
                  <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="600"
     data-aos-duration="1500" >
                       <h2>Software Development</h2>
                       <h5>We have recently done a CRM software suitable for all small business. If you are looking for customized software companies in Coimbatore. We Believe, BMO SOFTWARE is the right one for you.</h5>
                  </div>
                        
                  <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500">
                  <img src="./images/web dev1.jpg"></img>
                  </div>
                  </div>
          <br></br>
                  <div id="threethree">
                  <div  data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="600"
     data-aos-duration="1500">
                  <img src="./images/web dsn1.jpg"></img>
                  </div>
                  <div data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="1500">
                      <h2>Web Designing</h2>
                      <h5>We have recently done a website for Paradise Pest Control Pvt.Ltd, Info Institute Of Engineering and more. If you are looking for a professional web designing in Coimbatore have a look of our portfolio.</h5>
                  </div>
                  </div>
             </div> */}



          <div id="pagefour">

             <div id="fourtitleone" data-aos="fade-up"   data-aos-duration="3000">
                  <h2 >We’re  <span>NOT</span>  just an ordinary IT Company</h2>
                   <h2>Our Methods and Approaches are <span>PROVEN</span> </h2>
              </div>
              <div id="fourtitletwo" data-aos="fade-up"   data-aos-duration="3000">
                  <p>Our first step is requirements analysis, involves frequent communication with clients to determine their specific expectations of their requirement
Next, the design functions and operations are described in detail, including screen layouts, business rules, process diagrams.
The last phase Develop and Deployment and we wont compromise on quality that we deliver.</p>
              </div>

        </div>

        <div id="pagefive">
             <div class="pfive1" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
               <img src="./images/arrow1.png" alt="img"></img>
               <h2>Requirement Gathering</h2>
             </div>

             <div class="pfive2" data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
             <img src="./images/tooll1.png" alt="img"></img>
             <h2>Analysis & Design</h2>

             </div>
             <div class="pfive3" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
             <img src="./images/dev1.png" alt="img"></img>
             <h2>Develop & Deploy</h2>

             </div>
        </div>


        </div>
        


    </section>
    <Services1/>
    <Footer/>
    </>

    )
}
export default Frontpage