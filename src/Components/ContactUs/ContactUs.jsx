import React from "react";
import "./ContactUs.css";
import { FiPhone, FiMail, FiMapPin, FiHome } from "react-icons/fi";
import heroImg from "../../assets/contact-image.jpg";
import GoogleMap from "../Google Map/GoogleMap";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "885a18f1-37ce-4011-ba57-bb064ab1c21b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="breadcrumb">
          <FiHome />
          <span>Home</span>
          <span className="dot">•</span>
          <span>Contact Us</span>
        </div>
      </section>

      {/* ---------- PAGE CONTENT ---------- */}
      <section className="contact-page">
        {/* TOP INFO */}
        <div className="contact-info-bar">
          <div className="info-card">
            <FiPhone />
            <div>
              <h4>Call Us</h4>
              <p>+91 9266685321</p>
              <p>
                Business Hours <br />
                Mon - Sat, 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className="info-card">
            <FiMail />
            <div>
              <h4>Email Support</h4>
              <p>sales@qualitexpowertool.com</p>
            </div>
          </div>

          <div className="info-card">
            <FiMapPin />
            <div>
              <h4>Registered Office</h4>
              <p>
                D-58, 1st Floor, Sector 4, DSIIDC,
                <br />
                Bawana Industrial Area,
                <br />
                Delhi – 110039, India
              </p>
            </div>
          </div>

          <div className="info-card">
            <FiMapPin />
            <div>
              <h4>Manufacturing Unit</h4>
              <p>
                D-58, Sector 4, DSIIDC,
                <br />
                Bawana Industrial Area,
                <br />
                Delhi – 110039, India
              </p>
            </div>
          </div>
        </div>

        <hr className="contact-us-divider" />

        {/* MAIN CONTENT */}
        <div className="contact-content">
          {/* LEFT */}
          <div className="contact-left">
            <span className="subtitle">
              Let’s Build Powerful Solutions Together
            </span>

            <h2>
              Connect with<span> Qualitex Power Tools</span>
            </h2>

            <p>
              QUALITEX is a trusted name in the power tools and motor components
              industry, backed by over four decades of engineering excellence.
              Originating from the strong foundation of SPARES INDIA in 1980, we
              specialize in armatures, field coils, portable blowers, hot air
              guns, drills, mixers, and precision-engineered accessories.
            </p>

            <p>
              Our commitment goes beyond manufacturing. We believe in listening
              closely to our customers, understanding real-world applications,
              and continuously innovating through research, testing, and
              advanced production technologies. Every product reflects our focus
              on durability, efficiency, and international quality standards.
            </p>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your requirement, inquiry, or partnership opportunity"
                required
              ></textarea>

              <div className="captcha-box">
                <input
                  type="checkbox"
                  className="check-box"
                  id="check-box-input"
                />
                <label htmlFor="check-box-input" className="not-robot">
                  I’m not a robot
                </label>
              </div>

              <button type="submit" className="send-btn">
                Submit Inquiry
              </button>
            </form>
            <span className="status-message">{result}</span>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <GoogleMap />
    </>
  );
};

export default ContactUs;
