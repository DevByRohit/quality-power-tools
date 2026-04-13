import "./AboutUs.css";
import Stats from "../../Components/Stats/Stats";

/* Assets */
import heroImage from "../../assets/about-us-image.jpg";
// import founder1 from "../../assets/owner-1.jpeg";
// import founder2 from "../../assets/owner-2.jpeg";
// import founder3 from "../../assets/owner-3.jpeg";

export default function AboutUs() {
  return (
    <main className="about-page">
      {/* ===============================
          HERO SECTION
      =============================== */}
      <section className="about-hero">
        <img src={heroImage} alt="quality power tools" />
      </section>

      {/* ===============================
          INTRO SECTION
      =============================== */}
      <section className="about-intro">
        <div className="intro-about-us-container">
          <div className="elem1">
            <h1>QUALITEX POWER TOOLS</h1>
            <p>
              Qualitex Power Tools is an integrated enterprise committed to
              excellence in the business of accessories and spares for the power
              tools industry. With roots tracing back to 1980 through our
              conglomerate SPARES INDIA, we have built a strong foundation based
              on engineering expertise, research-driven innovation, and
              long-term industry experience.
            </p>

            <p>
              We specialize in manufacturing premium armatures, field coils,
              motor components, Hot Air Guns, Blowers, Electric Mixers and
              various power tool accessories. By combining advanced technology
              with rigorous quality control, we deliver durable, efficient, and
              high-performance tools trusted by professionals across India.
            </p>
          </div>
          <div className="elem2">
            <img src={heroImage} alt="about-image" className="about-image" />
          </div>
        </div>
      </section>

      {/* ===============================
          HISTORY SECTION
      =============================== */}
      <section className="about-history">
        <div className="about-us-container">
          <h2>HISTORY</h2>
          <p>
            The foundation of our group was laid in 1980 with SPARES INDIA,
            focusing on high-quality motor components for the power tools
            industry. Over the decades, we expanded into manufacturing and
            innovation, forming QUALITEX Power Tools to provide holistic
            solutions beyond spares.
          </p>

          <p>
            Through continuous research, development, and customer
            collaboration, we have evolved into a trusted manufacturer of
            armatures, field coils, Hot Air Guns, Blowers, and Electric Mixers.
            Our journey is driven by consistent innovation, quality excellence,
            and a commitment to long-term partnerships.
          </p>
        </div>
      </section>

      {/* ===============================
          WHY US SECTION
      =============================== */}
      <section className="about-why">
        <div className="about-us-container">
          <h2>WHY US?</h2>
          <p>
            At Qualitex, quality and customer satisfaction form the cornerstone
            of our operations. Every component and finished product undergoes
            rigorous testing to ensure durability, safety, and performance.
          </p>

          <p>
            Our proprietary brands QUALITEX and AVANZER conform to international
            trade standards and are steadily expanding into global markets. With
            40+ years of industry experience, cutting-edge manufacturing
            processes, and a customer-first approach, we consistently deliver
            reliable and cost-effective solutions.
          </p>

          <p>
            Our motto remains: “Work on customer feedback with utmost sincerity
            and swiftness.” This philosophy enables us to build strong,
            long-term relationships and ensure mutual growth with our partners.
          </p>
        </div>
      </section>

      {/* ===============================
        STATS COMPONENT (REUSED) (DO NOT MODIFY)
      =============================== */}
      <Stats />

      {/* ===============================
        MEET OUR MINDS
      =============================== */}
      {/* <section className="about-team">
        <div className="about-us-container">
          <h2>Meet Our Minds</h2>
          <p className="team-desc">
            Our leadership team brings decades of technical expertise,
            manufacturing excellence, and strategic vision to Qualitex Power
            Tools. With deep industry knowledge and a forward-thinking mindset,
            they continuously drive innovation, product development, and
            operational excellence across all divisions.
          </p>

          <div className="team-grid">
            <div className="team-card">
              <img src={founder1} alt="Brij Mohan Singla" />
              <h4>Pradeep Gogna</h4>
              <span>Founder</span>
            </div>

            <div className="team-card">
              <img src={founder2} alt="Akash Singla" />
              <h4>Varun Gogna</h4>
              <span>Co-Founder</span>
            </div>

            <div className="team-card">
              <img src={founder3} alt="Vivek Singla" />
              <h4>Abhinav Gogna</h4>
              <span>Co-Founder</span>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
