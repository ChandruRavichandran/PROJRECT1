import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from "../Header/Header"

import Navbar from "../Navbar/Navbar"
import Frontpage from "../Frontpage/Frontpage"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Products from "../Products/Products"
import Home from "../Home/Home"
import Explore from "../Frontpage/Explore"

import About1 from "../About/About1"
import Webdev from "../services/dropdown2/webdev"
import Swdev from "../services/dropdown2/swdev"
import Services1 from "../services/Services1"
import Technologies from "../services/technologies"
import Security from "../services/security"
import Mobdev from "../services/dropdown2/mobdev"
import Shoppingapp from "../services/dropdown3/Shoppingapp"
import Hotelapp from "../services/dropdown3/Hotelapp"
import Second from "../common/second"
import Appcnt from "../services/dropdown3/tools3/Appcnt"
import Pharmasyapp from "../services/dropdown3/Pharmasyapp"
import Flightticketapp from "../services/dropdown3/Flightticketapp"
import Fooddelivery from "../services/dropdown3/Fooddelivery"
import Services from "../services/services"
import Cntform from "../Contact/Cntform"
import Cntsrt from "../Contact/Cntsrt"
import Cntloc from "../Contact/Cntloc"
import Uidisign from "../services/dropdown2/uidisign"
import Swtsting from "../services/dropdown2/swtsting"
import Scrollbtn from "../Scroll/Scrollbtn"



function Pages() {
    return (
       <>
       <BrowserRouter>
       {/* <Header /> */}

<Navbar />
       <Routes>
       
        <Route></Route>
        
        <Route path="/frontpage" element = {<Frontpage />}></Route>
        <Route path="/scrollbtn" element={<Scrollbtn/>}></Route>
        <Route path="/" element={<Home/>}></Route> 
           <Route path="/explorehome" element = {<Explore />}></Route>
        <Route path="/about" element = {<About />}></Route>
            <Route path="/about1" element={<About1/>}></Route>
        <Route path="/products" element = {<Products />}></Route>
            <Route path="/shoppingapp" element={<Shoppingapp/>}></Route>
            <Route path="/hotelapp" element={<Hotelapp/>}></Route>
            <Route path="/pharmasyapp" element={<Pharmasyapp/>}></Route>
            <Route path="/flightticketapp" element={<Flightticketapp/>}></Route>
            <Route path="/fooddelivery" element={<Fooddelivery/>}></Route>

            <Route path="/appcnt" element={<Appcnt/>}></Route>
              {/* <Route path="/travel"  element={<Travel/>}></Route> */}
        <Route path="/services" element={<Services/>}></Route>
              <Route path="/services1" element={<Services1/>}></Route>
                   <Route path="/technologies" element={<Technologies/>}></Route>
                   <Route path="/security" element={<Security/>}></Route>
              <Route path="/webdev"  element={<Webdev/>}></Route>
              <Route path="/mobdev"  element={<Mobdev/>}></Route>
              <Route path="/swdev" element={<Swdev/>}></Route>
              <Route path="/uidisign" element={<Uidisign/>}></Route>
               <Route path="/swtsting" element={<Swtsting/>}></Route>
              
        <Route path="/contact" element = {<Contact />}></Route>
         <Route path="/cntform" element={<Cntform/>}></Route>
         <Route path="/cntsrt" element={<Cntsrt/>}></Route>
         <Route path="/cntloc" element={<Cntloc/>}></Route>

        <Route path="/second" element={<Second/>}></Route>
        <Route path="/third" element={<Second/>}></Route>


        





     
       </Routes>
      
       
     </BrowserRouter>
     </>
  )
}

export default Pages
