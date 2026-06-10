import "./styles/TechStackNew.css";
import { config } from "../config";
import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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

const licenses = config.licenses;

const TechStackNew = () => {
  const [activeLicenseIndex, setActiveLicenseIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const wheelLockRef = useRef(false);

  const moveLicense = (direction: "prev" | "next") => {
    setActiveLicenseIndex((current) => {
      if (direction === "prev") return current === 0 ? 0 : current - 1;
      return current === licenses.length - 1 ? licenses.length - 1 : current + 1;
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const section = carouselRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isCentered =
        rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;

      if (!isCentered) return;

      if (event.key === "ArrowLeft" && activeLicenseIndex > 0) {
        event.preventDefault();
        moveLicense("prev");
      }

      if (event.key === "ArrowRight" && activeLicenseIndex < licenses.length - 1) {
        event.preventDefault();
        moveLicense("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLicenseIndex]);

  const handleWheelFlip = (event: React.WheelEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;
    if (wheelLockRef.current) return;
    if (Math.abs(event.deltaY) < 18) return;

    const goingNext = event.deltaY > 0;
    const canMoveNext = activeLicenseIndex < licenses.length - 1;
    const canMovePrev = activeLicenseIndex > 0;

    if ((goingNext && !canMoveNext) || (!goingNext && !canMovePrev)) {
      return;
    }

    event.preventDefault();
    wheelLockRef.current = true;
    moveLicense(goingNext ? "next" : "prev");

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 420);
  };

  const shellHeight = "125vh";

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
            <h2>Licenses & <span>Certifications</span></h2>
            <p>
              A credential deck of AI coursework and research certifications I
              earned alongside my software, simulation, and machine learning
              work.
            </p>
          </div>

          <div
            className="license-carousel-shell"
            ref={carouselRef}
            onWheel={handleWheelFlip}
            style={{ height: shellHeight }}
          >
            <div className="license-carousel-stage">
              <div className="license-stage-toolbar">
                <span className="license-stage-pill">Credential Deck</span>
                <div className="license-stage-count">
                  <span>{String(activeLicenseIndex + 1).padStart(2, "0")}</span>
                  <span className="license-stage-divider" />
                  <span>{String(licenses.length).padStart(2, "0")}</span>
                </div>
              </div>

              <button
                type="button"
                className="license-nav-btn license-nav-prev"
                onClick={() => moveLicense("prev")}
                aria-label="Previous license"
                disabled={activeLicenseIndex === 0}
              >
                <MdChevronLeft />
              </button>

              <div className="license-carousel-track">
                {licenses.map((license, index) => {
                  const offset = index - activeLicenseIndex;
                  const absOffset = Math.abs(offset);
                  const isActive = offset === 0;
                  const isSide = absOffset === 1;
                  const translateX = offset * 190;
                  const rotateY = offset * -20;
                  const translateY = isActive ? 0 : absOffset * 14;
                  const scale = isActive ? 1 : isSide ? 0.83 : 0.68;
                  const opacity = isActive ? 1 : isSide ? 0.38 : 0.12;

                  return (
                    <article
                      key={license.title}
                      className={`license-flip-card ${isActive ? "is-active" : ""}`}
                      style={{
                        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                        opacity,
                        zIndex: `${40 - absOffset}`,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      <div className="license-card-glass" />
                      <div className="license-card-topbar">
                        <button type="button" className="license-mini-btn" aria-label="Previous preview">
                          <MdChevronLeft />
                        </button>
                        <span className="license-expand-pill">Preview</span>
                        <button type="button" className="license-mini-btn" aria-label="Options">
                          •••
                        </button>
                      </div>

                      <div className="license-cover-wrap">
                        <img
                          src={license.cover}
                          alt={`${license.issuer} credential`}
                          className="license-cover"
                        />
                        <div className="license-cover-glow" />
                      </div>

                      <div className="license-card-body">
                        <div className="license-card-head">
                          <div>
                            <p className="license-kicker">{license.issuer}</p>
                            <h4>{license.title}</h4>
                          </div>
                          <span className="license-year">{license.issued}</span>
                        </div>
                        <p className="license-summary">{license.summary}</p>
                        <div className="license-meta-row">
                          <p className="license-meta">
                            Issued {license.issued}
                            {license.expires ? ` · Expires ${license.expires}` : ""}
                          </p>
                          <p className="license-id">Credential ID {license.credentialId}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                className="license-nav-btn license-nav-next"
                onClick={() => moveLicense("next")}
                aria-label="Next license"
                disabled={activeLicenseIndex === licenses.length - 1}
              >
                <MdChevronRight />
              </button>

              <div className="license-carousel-dots">
                {licenses.map((license, index) => (
                  <button
                    key={license.title}
                    type="button"
                    className={`license-dot ${activeLicenseIndex === index ? "is-active" : ""}`}
                    onClick={() => setActiveLicenseIndex(index)}
                    aria-label={`Show ${license.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackNew;
