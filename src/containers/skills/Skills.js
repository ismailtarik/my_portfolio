import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio"; // Removed unused imports
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import whatIDoImage from "../../assets/images/what_i_do.png"; // Static import

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img alt="Man Sitting on Table" src={whatIDoImage} />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
          </div>
        </Fade>
      </div>

      {/* Skills Section */}
      <div className="skills-list-container">
        {skillsSection.skills.map((skill, i) => (
          <Fade key={i} bottom duration={1000}>
            <div className="skill-item">
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                {skill}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
