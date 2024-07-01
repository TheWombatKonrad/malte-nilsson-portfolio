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
        {skills.map((skill, index) => (
          <li key={index} className="skill">
            <img src={require(`../images/icons/${skill}.webp`)} alt={skill} />
            <p className="skill-name">{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
