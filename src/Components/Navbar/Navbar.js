import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
 import {Link ,Outlet} from 'react-router-dom'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header >
               <img src="./images/kitkat logo.jpg" alt="logo"/>
			<nav ref={navRef}>
				<ul>
					<li><Link to="/frontpage" className="nav-link scrollto active" >Home</Link></li>
		            <li><Link to="/about"  className="nav-link scrollto" >AboutUs</Link></li>
					<li className="dropdown"><Link to="/services"><span>Services <i class="bi bi-chevron-down"></i></span> </Link>
                         
          <ul className="sidenav"> 
               <li><Link to="/webdev">Web Development</Link></li>  
               <li><Link to="/mobdev">Mobile Application </Link></li>
			   <li><Link to="/swdev">Software Development</Link></li>
               <li><Link to="/uidisign">UI UX Design</Link></li>
               <li><Link to="/swtsting">Software Testing </Link></li>
            </ul></li> 

			 <li className="dropdown"><Link to="/products"><span>Products <i class="bi bi-chevron-down"></i></span> </Link>
                    <ul className="sidenav">
                       <li><Link to="/shoppingapp">Shopping App Development</Link></li>
                       <li><Link to="/hotelapp">Hotel Management System</Link></li>  
                       <li><Link to="/pharmasyapp">Pharmacy Management Software</Link></li>
                       <li><Link to="/flightticketapp">Flight Ticket Booking</Link></li> 
                       <li><Link to="/fooddelivery">Food Delivery App Development</Link></li>
                     
                     </ul>
                    </li>

          <li><Link className="nav-link scrollto" to="/contact">ContactUs</Link></li>       

				</ul>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      <button className="callbtn"> BOOK A CALL</button>

		</header>
	);
}

export default Navbar;

// import React ,{useState} from "react";
// import './Navbar.css'
// import {Link ,Outlet} from 'react-router-dom'

// function Navbar(){
//   const [navList, setNavList] = useState(false)

//     return(
//         <> 
//         <section  id="navbar1" data-aos="fade-up" data-aos-duration="1500"> 
      
//                <nav  id="navbar" className={navList? "small" : "flex"}>
//                   <ul  className='ulon'>
//                     <li><Link to="/frontpage" className="nav-link scrollto active" >Home</Link></li>
//                     <li><Link to="/about"  className="nav-link scrollto" >About Us</Link></li>

//                      <li className="dropdown"><Link to="/services"><span>Services<i class="bi bi-chevron-down"></i></span> </Link>
          
//           <ul className="sidenav"> 
//               <li><Link to="/webdev">Web Development</Link></li>  
//               <li><Link to="/mobdev">Mobile Application </Link></li>

//               <li><Link to="/swdev">Software Development</Link></li>
//               <li><Link to="/uidisign">UI UX Design</Link></li>
//               <li><Link to="/swtsting">Software Testing </Link></li>
          
             
//             </ul></li>
//                     <li className="dropdown"><Link to="/products"><span>Products <i class="bi bi-chevron-down"></i></span> </Link>
//                     <ul className="sidenav">
//                       <li><Link to="/shoppingapp">Shopping App Development</Link></li>
//                       <li><Link to="/hotelapp">Hotel Management System</Link></li>  
//                       <li><Link to="/pharmasyapp">Pharmacy Management Software</Link></li>
//                       <li><Link to="/flightticketapp">Flight Ticket Booking</Link></li> 
//                       <li><Link to="/fooddelivery">Food Delivery App Development</Link></li>
                     
//                     </ul>
//                    </li>

//           <li><Link className="nav-link scrollto" to="/contact">Contact Us</Link></li>

//            <div className='mobile-nav-toggle'>
//             <h2 onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</h2>
//           </div> 
//                   </ul>
//                </nav>
//                <Outlet />

//                </section>
//        </>
//     )
// }
// export default Navbar