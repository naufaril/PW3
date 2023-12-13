import React from "react";
import "../style/footer.css";
import ilab from "../assets/logo-ilab.png";
import facebook from "../assets/logo-facebook.png";
import twitter from "../assets/logo-twitter.png";
import instagram from "../assets/logo-instagram.png";

const Footer = () => {
  return (
    <footer>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div class="col1">
              <img src={ilab} alt="" />
              <p>Copyright &copy; 2022 Infinite Learning</p>
            </div>
          </div>
          <div class="col">
            <div class="col2">
              <h5>Services</h5>
              <p>Email Marketing</p>
              <p>Campaigns</p>
              <p>Branding</p>
              <p>Offline</p>
            </div>
          </div>
          <div class="col">
            <div class="col3">
              <h5>About Us</h5>
              <p>Our Story</p>
              <p>Benefits</p>
              <p>Team</p>
              <p>Careers</p>
            </div>
          </div>
          <div class="col">
            <div class="col4">
              <h5>Follow Us</h5>
              <p>
                <img src={facebook} height="20px" alt="" />
                Facebook
              </p>
              <p>
                <img src={twitter} height="18px" alt="" />
                Twitter
              </p>
              <p>
                <img src={instagram} height="20px" alt="" />
                Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
