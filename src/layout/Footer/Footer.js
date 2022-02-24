import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src="/public/assets/images/playstore.png" alt="playstore" />
        <img src="/public/assets/images/Appstore.png" alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>Copyrights 2022 &copy; Lambert Yubin</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/">Instagram</a>
        <a href="/">Youtube</a>
        <a href="/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
