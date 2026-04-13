import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaShareAlt,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "./FloatingSocial.css";

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: <FaYoutube size={28} />,
      link: "https://youtube.com/",
      label: "Youtube",
    },
    {
      icon: <FaInstagram size={28} />,
      link: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FaFacebook size={28} />,
      link: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FaWhatsapp size={28} />,
      link: "https://wa.me/919266685321",
      label: "WhatsApp",
    },
    {
      icon: <FaEnvelope size={25} />,
      link: "mailto:sales@qualitexpowertool.com",
      label: "Email",
    },
  ];

  return (
    <div
      className={`floating-social ${isOpen ? "open" : ""}`}
      onMouseEnter={() => {
        if (window.innerWidth > 768) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 768) setIsOpen(false);
      }}
    >
      {/* Social Icons */}
      <div className="social-icons">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            {item.icon}
            <span className="tooltip">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        className="main-social-btn"
        onClick={() => window.innerWidth <= 768 && setIsOpen(!isOpen)}
      >
        <FaShareAlt size={25} />
      </button>
    </div>
  );
};

export default FloatingSocial;
