import BiologyMaster from "./BiologyMaster";
import DotNetDevloper from "./DotNetDeveloper";

const Education = () => {
  return (
    <div className="info-box">
      <h3>Education</h3>
      <ul>
        <li>
          <DotNetDevloper />
        </li>
        <li>
          <BiologyMaster />
        </li>
      </ul>
    </div>
  );
};

export default Education;
