import React from "react";
import { ReactComponent as Logo } from '../images/logo.svg';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Logo/>
          <span>travel</span>
        </div>

        {/* Navigation Links (Inline) */}
        <ul className="navbar-links">
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#hotels">Hotels</a>
          </li>
          <li>
            <a href="#flights">Flights</a>
          </li>
          <li>
            <a href="#bookings">Bookings</a>
          </li>
          <li><a href="#login">Login</a></li>
          <li ><button className="signupButton">SignUp</button></li>
          <li><select className="language-selector">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
