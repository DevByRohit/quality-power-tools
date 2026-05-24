import React, { useState, useEffect } from "react";
import "./Navbar.css";

import logo from "../../assets/qualitex-logo-1.png";
import { MdContactPhone } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductOpen(false);
  };

  // ✅ SHRINK NAVBAR ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className={`navbar ${isShrunk ? "navbar--shrink" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Qualitex Logo" className="nav-logo" />
        </Link>

        {/* NAV LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>

          {/* PRODUCT DROPDOWN */}
          <li
            className="product-menu"
            onMouseEnter={() => !isMobile && setProductOpen(true)}
            onMouseLeave={() => !isMobile && setProductOpen(false)}
          >
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  setProductOpen((prev) => !prev);
                } else {
                  closeMenu();
                }
              }}
            >
              <span className="product-trigger">
                Product
                <span className="arrow">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </span>
            </NavLink>

            <div className={`product-dropdown ${productOpen ? "show" : ""}`}>
              <Link to="/product" onClick={closeMenu}>
                All Products
              </Link>
              <Link to="/product/blower" onClick={closeMenu}>
                Qualitex Blower
              </Link>
              <Link to="/product/heat-gun" onClick={closeMenu}>
                Qualitex Heat Gun
              </Link>
              <Link to="/product/paint-mixer" onClick={closeMenu}>
                Qualitex Paint Mixer
              </Link>
              <Link to="/product/angle-grinder" onClick={closeMenu}>
                Qualitex Angle Grinder
              </Link>
              <Link to="/product/drill-machine" onClick={closeMenu}>
                Qualitex Drill Machine
              </Link>
              <Link to="/product/marble-cutter" onClick={closeMenu}>
                Qualitex Marble Cutter
              </Link>
            </div>
          </li>

          {/* MOBILE CONTACT */}
          <li className="mobile-contact">
            <NavLink to="/contact-us" onClick={closeMenu}>
              <button className="btn btn-14 btn-contact">
                Contact us
                <MdContactPhone size={20} />
              </button>
            </NavLink>
          </li>
        </ul>

        {/* DESKTOP CONTACT */}
        <NavLink to="/contact-us">
          <button className="btn btn-14 btn-contact desktop-only">
            Contact us
            <MdContactPhone size={25} className="btn-icon btn-icon--contact" />
          </button>
        </NavLink>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
