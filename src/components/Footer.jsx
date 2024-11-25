import React from "react";
import { ReactComponent as FacebookIcon } from "../images/facebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../images/instagramIcon.svg";
import { ReactComponent as TwitterIcon } from "../images/twitterIcon.svg";
import { ReactComponent as GooglePlayImage } from "../images/googlePlayImg.svg";
import { ReactComponent as AppleStoreImage } from "../images/appleStoreImg.svg";
import { ReactComponent as LogoIcon } from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="logo-section">
            <div className="logo-title">
            <LogoIcon className="footer-logo" />
            <p className="title">travel</p>
            </div>
            <p className="footer-deatils">
              Book your trip in minutes, get full <br />
              control for much longer.
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>Airline Fees</li>
            <li>Airline</li>
            <li>Low Fare Tips</li>
          </ul>
        </div>

        <div className="footer-column">
          <div className="social-media">
            <FacebookIcon className="social-icon" />
            <InstagramIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
          </div>
          <h4>Discover our app</h4>
          <div className="app-icons">
            <GooglePlayImage/>
            <AppleStoreImage/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved @jadoo.co</p>
      </div>
    </footer>
  );
};


export default Footer;
