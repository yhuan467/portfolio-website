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

        <div className="licenses-block">
          <div className="licenses-heading">
            <h3>Licenses & Certifications</h3>
            <p>
              Coursework, agent tooling, and research-related certifications
              that support my software and ML background.
            </p>
          </div>

          <div className="licenses-list">
            {config.licenses.map((license) => (
              <article key={license.title} className="license-card">
                <div className="license-badge">AI</div>
                <div className="license-content">
                  <h4>{license.title}</h4>
                  <p className="license-issuer">{license.issuer}</p>
                  <p className="license-meta">
                    Issued {license.issued}
                    {license.expires ? ` · Expires ${license.expires}` : ""}
                  </p>
                  <p className="license-id">Credential ID {license.credentialId}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
