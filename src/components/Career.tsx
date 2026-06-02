import "./styles/Career.css";
import { config } from "../config";

const getDisplayMeta = (period: string) => {
  if (period.includes("Present")) {
    return { year: "NOW", label: "" };
  }

  if (period.toLowerCase().includes("expected")) {
    const yearMatch = period.match(/\d{4}/g);
    return {
      year: yearMatch?.[yearMatch.length - 1] ?? period,
      label: "Graduating",
    };
  }

  if (period.toLowerCase().includes("graduated")) {
    const yearMatch = period.match(/\d{4}/g);
    return {
      year: yearMatch?.[yearMatch.length - 1] ?? period,
      label: "Graduated",
    };
  }

  if (period.includes(" - ")) {
    return {
      year: period.split(" - ")[0],
      label: "",
    };
  }

  const yearMatch = period.match(/\d{4}/g);
  return {
    year: yearMatch?.[yearMatch.length - 1] ?? period,
    label: "",
  };
};

const getSortYear = (period: string) => {
  if (period.includes("Present")) return Number.MAX_SAFE_INTEGER;
  const yearMatch = period.match(/\d{4}/g);
  if (yearMatch?.length) return Number(yearMatch[yearMatch.length - 1]);
  return 0;
};

const Career = () => {
  const sortedExperiences = [...config.experiences].sort(
    (a, b) => getSortYear(b.period) - getSortYear(a.period)
  );

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {sortedExperiences.map((exp, index) => {
            const displayMeta = getDisplayMeta(exp.period);

            return (
              <div key={index} className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                  </div>
                  <div className="career-year">
                    <h3>{displayMeta.year}</h3>
                    {displayMeta.label && (
                      <span className="career-year-label">
                        {displayMeta.label}
                      </span>
                    )}
                  </div>
                </div>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
