import "./styles/TechStackNew.css";
import { config } from "../config";

const skillCards = [
  {
    label: "Programming",
    items: config.skillsOverview.programming,
  },
  {
    label: "Tools",
    items: config.skillsOverview.tools,
  },
  {
    label: "Languages",
    items: config.skillsOverview.languages,
  },
  {
    label: "Related Coursework",
    items: config.skillsOverview.coursework,
  },
];

const TechStackNew = () => {
  return (
    <section className="skills-section section-container">
      <div className="skills-shell">
        <div className="skills-heading">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>
            A practical toolkit across software engineering, research, and
            system building.
          </p>
        </div>

        <div className="skills-grid">
          {skillCards.map((card) => (
            <article key={card.label} className="skills-card">
              <h3>{card.label}</h3>
              <div className="skills-tags">
                {card.items.map((item) => (
                  <span key={item} className="skills-tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
