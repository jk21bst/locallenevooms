// import React from 'react'
// import { ReactDOM } from 'react';
// import { Outlet, Link, Router, Routes } from 'react-router-dom';
// import {useState} from 'react'
// import { Navigate } from 'react-router-dom';


// export default function UserLogin() {


//   const[gotoproduct,setgotoproduct] = useState(false);





  


// const handleloginlanding = () =>{
//   console.log("clicked on login button")
  
//     setgotoproduct(true);
    
//    }
 
  
//  if(setgotoproduct){
//   <Link to="/about"/>
//  }


 

 
  







//   return (
//     <div >
//       <div className>
//   <label htmlFor="exampleFormControlInput1" className="form-label text-center">Username</label>
//   <input type="Username" className="form-control" id="exampleFormControlInput1" placeholder="Enter Username"/>
// </div>
// <div className="mb-3">
//   <label htmlFor="passwordFormControlInput" className="form-label">Password</label>
//   <input type="Password" className="form-control" id="passwordFormControlInput" placeholder="EnterPassword"/>
// </div>
// <Link className="btn btn-success mx-1" onClick={handleloginlanding} to="/aboutus">Login</Link>
// <button type="button" className="btn btn-secondary mx-1">Forgot Password</button>

//     </div>
//   )
//  }



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import login from './../images/login.jpg';

import Axios from 'axios';
// import main from './i1.jpg';





function Login() {

    // const [emp, setEmp] = useState([])
    // const [empId, setEmpId] = useState("")
    // const [empName, setEmpName] = useState("");
    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");
    // const [empEmail, setEmpEmail] = useState("");
    // const [empAddress, setEmpAddress] = useState("");
    // const [empPhone, setEmpPhone] = useState("");
    // const [managerId, setManagerId] = useState("");
    // const [designation, setDesignation] = useState("");
    // const [level, setLevel] = useState("");
    const setUid = (username) => {
        console.log(username);


        localStorage.setItem("uid1", username);
      
    }





    function validateForm() {
        console.log(username, pass)
         localStorage.setItem("uid1", username);
        Axios.get(`http://localhost:58355/api/CustomerLogins/login/${username}/${pass}`)
            .then(response => {
                // console.log(response.data)
                if (response.data.username === undefined) {
                    alert("Invalid Login")
                }
                else  {
                    alert("Logged in Successfull" )
                  // window.location.href = `/products/${response.data.customerid}`
                  window.location.href = `/product`
                }
                // else if (response.data.id == 1) {
                //     alert("Manager Login");
                //     window.location.href = `manager/${response.data.customerid}`
                // }
                // else if (response.data.level == 1) {
                //     alert("CEO login");
                //     window.location.href = `/ceo/${response.data.empId}`
                // }
                // else {
                //     alert("Invalid Login Credentials");
                // }
            })
    }




    return (
        <section class="vh-100">
            <div class="container-fluid h-custom ">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
              <img src={login} />
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
    
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Username</label>
                                <input type="username" id="form3Example3" class="form-control form-control-lg"
                                    onChange={(e) => { setUserName(e.target.value) }}
                                    value={username} placeholder="Enter a valid username" />
                                
                            </div>

                            
                            <div class="form-outline mb-3">
                                <label class="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" class="form-control form-control-lg"
                                    placeholder="Password"
                                    onChange={(e) => { setPass(e.target.value) }} />
                                
                            </div>

                            <div class="d-flex justify-content-between align-items-center">

                                <div class="form-check mb-0">
                                    
                                    <label class="form" htmlFor="form2Example3">
                                       
                                    </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                
                                <button button type="button" class="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={validateForm.bind(this,username,pass)}>Login</button>
                              
                            </div>

                        </form>
                    </div>
                </div>
            </div>
           
                

        </section>

    )
}

export default Login;