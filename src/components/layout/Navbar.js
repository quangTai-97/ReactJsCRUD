import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    {/* <li class="navbar-brand" to="#"></li> */}
 
    <h3><Link style={{color:'#fff'}} className="nav-link" to="/">React User</Link></h3>
   
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
   
      </ul>

    </div>
  </div>
</nav>
        </React.Fragment>
     );
}
 
export default Navbar;