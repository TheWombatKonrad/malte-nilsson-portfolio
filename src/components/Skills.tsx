import "./Skills.css";

const Skills = () => {
  const skills: string[] = [
    "C-Sharp",
    "CSS",
    "HTML",
    "JavaScript",
    "React",
    "TypeScript",
  ];

  return (
    <div className="info-box">
      <h3>Skills</h3>
      <ul id="skills">
        {skills.map((skill: string, index: number) => (
          <li key={index} className="skill">
            <img
              src={
                new URL(`../assets/images/icons/${skill}.webp`, import.meta.url)
                  .href
              }
            />
            <p className="skill-name">{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
