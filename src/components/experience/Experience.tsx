import Nonsultant from "./Nonsultant";
import Volvo from "./Volvo";

const Experience = () => {
  return (
    <div className="info-box">
      <h3>Experience</h3>
      <ul>
        <li>
          <Nonsultant />
        </li>
        <li>
          <Volvo />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
