import React from "react";
import { FiPhone, FiMail, FiMapPin, FiDownload } from "react-icons/fi";
import { RiLinksFill } from "react-icons/ri";
import "./Footer.css";
import qr from "../../assets/qr.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const usefulLinks = [
    { label: "Blower", path: "/product/blower" },
    { label: "Heat Gun", path: "/product/heat-gun" },
    { label: "Paint Mixer", path: "/product/paint-mixer" },
    {
      label: "Qualitex Dashboard",
      path: "https://dashboard.qualitexpowertool.com",
      external: true,
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        {/* Column 1 - Contact Info */}
        <div className="footer-col contact-col">
          <h3 className="footer-title">Contact Info</h3>
          <div className="divider" />

          <ul className="contact-list">
            <li>
              <span className="icon-wrap">
                <FiPhone />
              </span>
              <div className="contact-text">
                <a href="tel:+919266685321" className="phone-link">
                  <strong>+91 9266685321</strong>
                </a>
              </div>
            </li>

            <li>
              <span className="icon-wrap">
                <FiMail />
              </span>
              <div className="contact-text">
                <a href="mailto:sales@qualitypowertool.com">
                  sales@qualitexpowertool.com
                </a>
              </div>
            </li>

            <li>
              <span className="icon-wrap">
                <FiMapPin />
              </span>
              <div className="contact-text address">
                <a
                  href="https://maps.app.goo.gl/BiQDPvudBZN9sGMT6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  D-58, 1st Floor, Sector 4, DSIIDC, Bawana Industrial Area,
                  <br />
                  Delhi - 110039
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 2 - Useful Links */}
        <div className="footer-col links-col">
          <h3 className="footer-title">Useful links</h3>
          <div className="divider" />

          <ul className="link-list">
            {usefulLinks.map((item) => (
              <li key={item.path}>
                <RiLinksFill className="bullet" />

                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Policies */}
        <div className="footer-col policy-col">
          <h3 className="footer-title">Our Policies</h3>
          <div className="divider" />

          <ul className="policy-list">
            <li>
              <RiLinksFill className="bullet" />
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>

            <li>
              <RiLinksFill className="bullet" />
              <Link to="/terms-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Brochure / QR */}
        <div className="footer-col brochure-col">
          <h3 className="footer-title scan">Scan For E - Catalogue</h3>
          <div className="divider" />

          <div className="qr-wrap">
            {/* Replace src with your actual QR image */}
            <a
              href="/qualitex-catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={qr} alt="Scan QR Code" className="qr-img" />
            </a>

            <div className="qr-caption">
              Scan to Download Our <br /> E - Catalogue
            </div>
          </div>

          <div className="brochure-top">
            <a href="/qualitex-catalogue.pdf" download className="download-btn">
              <FiDownload className="download-icon" />
              Download E - Catalogue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
