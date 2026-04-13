import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome To</h1>
        <h1>Qualitex Power Tool</h1>
        <p>
          QUALITEX is firmly committed to excel in the business of accessories
          and spares for the power tools industry. This strong commitment to
          being the No.1 in our industry, encompasses all our activities from
          product designing and engineering to manufacturing and service.
        </p>
        <div className="hero-btns">
          <button className="btn btn-14 btn-contact">
            <MdContactPhone size={22} className="btn-icon btn-icon--contact" />
            Contact us
          </button>

          <button className="btn btn-14 btn-explore">
            Explore more
            <FaArrowRightLong size={22} className="btn-icon btn-icon--arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
