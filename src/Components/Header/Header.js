import React from "react";
import './Header.css'

function Header(){
    return(
        <>
        <section>
            <div id="header">
               {/* <div id="headerone">
                    <div><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <div><i class="fa fa-instagram" aria-hidden="true"></i></div>
                    <div><i class="fa fa-facebook" aria-hidden="true"></i></div>
                    <div><i class="fa fa-chrome" aria-hidden="true"></i></div>
               </div> */}

               <div id="headertwo" data-aos="fade-right" data-aos-duration="1500">
               <img src="./images/kitkat logo.jpg" alt="logo"/>
               </div>

               <div id="headerthree" data-aos="fade-left" data-aos-duration="1500">
               <button> BOOK A CALL</button>

               </div>
            </div>
        </section>
        </>
    )
}

export default Header