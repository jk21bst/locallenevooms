import React from 'react'
import Navbar from './component/Navbar'
import Bodycarousel from './component/Bodycarousel'
import UserLogin from './component/UserLogin'
import Admin from './component/Admin'
import Product from './component/Product';
import Aboutus from './component/Aboutus';
import{BrowserRouter as Router,
  Routes,Route,Link} from "react-router-dom";
import Usercart from './component/Usercart'







export default function App() {
  return (
    <>
    <Router>


    <div className='wholebody' >
    <div>
            <Navbar title="ShopEasy" about="About Us" />
           
      
      
    </div>
 
    <div className="container"> <Bodycarousel/></div>
    <Routes>  
    <Route exact path="/aboutus" element={<Aboutus/>} />
    <Route exact path="/product" element={<div className="container mx-3 my-3"><Product/></div>}/>
            <Route exact path="/userlogin" element={<UserLogin />} />
            <Route exact path="/usercart" element={<Usercart/>} />
    

    
  </Routes> 
    </div>
      </Router>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-primary">

<div class="text-white mb-3 mb-md-0">
    Copyright © 2022. All rights reserved.
</div>


</div>
      
    </>





    
  )
}
