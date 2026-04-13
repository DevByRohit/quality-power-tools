import React from "react";
import "./FooterBottom.css";
import { RiCopyrightLine } from "react-icons/ri";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-copyright">
          Qualitex Power Tools&nbsp;
          <RiCopyrightLine /> &nbsp;
          {new Date().getFullYear()}. &nbsp;All rights reserved.
        </div>

        <span className="footer-separator">&nbsp;|&nbsp;</span>

        <div className="footer-credit">Built By Rohit Ahirwar</div>
      </div>
    </div>
  );
};

export default FooterBottom;
