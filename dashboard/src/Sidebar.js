import React from 'react';
import c3 from "./cutm2.png";
 function Sidebar() {
  return (

    
 <div>
    
    <div class="wrapper side">
      <input type="checkbox" id="btn" hidden/>
      <label for="btn" class="menu-btn">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
      </label>
      <nav id="sidebar">
        
        <div class="title brand">
          {/* <img  class = "logo" src="./cutm2.png"/> */}
          <img class ="logo" src={c3}  />
           <div>Dashboard</div>
      
          </div>
        <ul class="list-items">
          <li><a href="#"><i class="fas fa-home"></i>Courses</a></li>
          {/* <li><a href="#"><i class="fas fa-sliders-h"></i>Clients</a></li>
          <li><a href="#"><i class="fas fa-address-book"></i>Services</a></li>
          <li><a href="#"><i class="fas fa-cog"></i>Settings</a></li>
          <li><a href="#"><i class="fas fa-stream"></i>Features</a></li>  */}
          <li><a href="#"><i class="fas fa-user"></i>Admin</a></li>
          <li><a href="#"><i class="fas fa-globe-asia"></i>Home</a></li>
          {/* <li><a href="#"><i class="fas fa-envelope"></i>Lau*a Lassan</a></li> */}
          <div class="icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </ul>
      </nav>
    </div>
    <div class="content">
      <div class="header">DASHBOARD</div>
      <p></p>
    </div>



 </div>
  )
}

export default Sidebar;