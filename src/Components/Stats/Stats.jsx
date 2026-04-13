// Stats.jsx
import React from "react";
import "./Stats.css";
import Counter from "./Counter";
import { FaPlus } from "react-icons/fa";
import project from "../../assets/project-completed.png";
import customer from "../../assets/customer.png";
import experience from "../../assets/experience.png";
import engineers from "../../assets/team.png";

const statsData = [
  {
    key: "projects",
    img: project,
    to: 5000000,
    duration: 5,
    title: "Tools Produced",
  },
  {
    key: "customers",
    img: customer,
    to: 125,
    duration: 4,
    title: "Customers Across India",
  },
  {
    key: "experience",
    img: experience,
    to: 50,
    duration: 3,
    title: "Years Of Experience",
  },
];

const Stats = () => {
  return (
    <section className="stats-section" aria-label="Company statistics">
      <div className="stats-container">
        {statsData.map((s) => (
          <article className="stat-card elem" key={s.key}>
            <div className="stat-top">
              <img src={s.img} alt={`${s.title} icon`} className="stat-img" />
            </div>

            <div className="stat-body">
              <div className="digit-plus">
                <Counter to={s.to} duration={s.duration} />
                <FaPlus className="icon-plus" aria-hidden />
              </div>
              <h3 className="stat-title">{s.title}</h3>
            </div>
          </article>
        ))}
        <article className="stat-card elem" key="extra">
          <div className="stat-top">
            <img src={engineers} alt="engineers-logo" className="stat-img" />
          </div>

          <div className="stat-body">
            <div className="stat-title">In-House Engineering</div>
            <h3 className="stat-title">Team</h3>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Stats;
