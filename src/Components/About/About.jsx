import { useState } from "react";
import "./About.css";
import {
  FaPlay,
  FaTools,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-visuals">
          <div className="main-image-wrapper">
            {/* THUMBNAIL + PLAY BUTTON */}
            {!isPlaying && (
              <>
                <img
                  src="/video-thumbnail.png"
                  alt="About Video Thumbnail"
                  className="video-thumbnail"
                />

                <div className="play-btn-overlay">
                  <button className="play-btn" onClick={handlePlay}>
                    <FaPlay />
                  </button>
                </div>
              </>
            )}

            {/* YOUTUBE VIDEO */}
            {isPlaying && (
              <div className="youtube-video-wrapper">
                <iframe
                  className="main-video"
                  src="https://www.youtube.com/embed/P8ksfrnz9yk?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                  title="About Qualitex Power Tools"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-content">
          <h2 className="section-title">
            About Our <span className="highlight">Qualitex Power Tools</span>
          </h2>

          <p className="description">
            With a strong foundation laid in 1980 through our conglomerate
            SPARES INDIA, Qualitex has evolved into an integrated enterprise
            specializing in research, development, production, and sales of
            high-performance power tool spares and accessories.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="about-icon-box">
                <FaGift className="icon-image" />
              </div>
              <div className="feature-text">
                <h4>Strength and Durability</h4>
                <p>Robust, Reliable, Long-Lasting, Sturdy, Resilient.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="about-icon-box">
                <FaHandHoldingUsd className="icon-image" />
              </div>
              <div className="feature-text">
                <h4>Cost-Effective Solutions</h4>
                <p>Affordable, Durable, Reliable, Efficient.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="about-icon-box">
                <FaTools className="icon-image" />
              </div>
              <div className="feature-text">
                <h4>Industrial Excellence</h4>
                <p>Innovation, Precision, Quality, Performance.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="about-icon-box">
                <FaShieldAlt className="icon-image" />
              </div>
              <div className="feature-text">
                <h4>Trusted for Daily Use</h4>
                <p>Reliable, Durable, Safe, Efficient.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
