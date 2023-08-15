import React from 'react'
import './Scrollbtn.css'


const Scrollbtn = () => {

    const top =()=>{
        window.scrollTo(0,0);
    };
  return (
    <>
    <button className='topbtn' onClick={top} >TOP</button>
    </>
  )
}

export default Scrollbtn