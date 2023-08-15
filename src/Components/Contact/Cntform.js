import React,{useState} from 'react'
import './Cntform.css'
import axios from "axios"

const Cntform = () => {
  const [user,setUser] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    repassword: ""
})


const handleChange = (e)=>{
  const { name , value} = e.target;
  setUser((preve)=>{
      return{
          ...preve,
          [name] : value
      }
  })
}


const handleSubmit = async(e)=>{
  e.preventDefault();
      console.log(user)
  const {firstName,lastName,email,password,repassword} = user
  if(firstName && lastName && email && password){
      if(password === repassword){
          await axios.post("http://localhost:8080/Contact",user)
          .then((res) => {
              alert(res.data.message)
          })
 }
      else{
          alert("check Your Password")
      }
  }

}
  return (
    <>
    <section >
       <div className='form1'>
            <div className='form11'>
                <h1>Schedule A <span> Free Expert Session</span></h1>
                <h4>Get Recommendations, Custom Solutions, Developer’s Resume, or Estimations.</h4>
            </div>
       <form className=' form21'>
            <div class="row">
              <div class="col">
                 <input type="text" class="form-control" onChange={handleChange} placeholder="First name" name="firstName" value={user.firstName}></input>
               </div>
               <div class="col">
                   <input type="text" class="form-control" onChange={handleChange} placeholder="Last name" name="lastName" value={user.lastName}></input>
                </div>
                
            </div>
            <div class="row">
              <div class="col">
                 <input type="text" class="form-control" onChange={handleChange} placeholder="Password" name='password' value={user.password}></input>
               </div>
               <div class="col">
                   <input type="text" class="form-control" onChange={handleChange} name='repassword' placeholder="Repassword" value={user.repassword}></input>
                </div>
                </div>

                <div class="row">
                  {/* <div class="col">
                    <div class="mb-3">
                        <input class="form-control" type="file" id="formFile"  ></input>
                    </div>
                  </div> */}

                  <div class="col">
                    <div class="form-group">
                    <input type="email" class="form-control" name='email' placeholder="Email" value={user.email} onChange={handleChange}/>
                    </div>
                  </div>

                </div> 
                <div className='sbtn'>
                <button type="submit" class="btn btn-primary mb-2" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

       </div>
    </section>
    </>
  )
}

export default Cntform;