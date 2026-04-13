import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <section className="google-map-section">
      {/* Heading */}
      <div className="map-heading">
        <h1>Manufacturing Unit & Registered Office Location</h1>
        <p>Qualitex Power Tools - Bawana, New Delhi</p>
      </div>

      {/* Map */}
      <iframe
        className="visible-location-map"
        title="QUALITEX POWER TOOLS Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.631350266996!2d77.05917617451657!3d28.79025387690264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07c4a9a6f629%3A0xbe555df8a1ea295a!2sQUALITY%20POWER%20TOOLS!5e0!3m2!1sen!2sin!4v1770032306226!5m2!1sen!2sin"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
