import * as React from "react";
import BiologyMaster from "./BiologyMaster";
import DotNetDevloper from "./DotNetDeveloper";

const Education = () => {
  return (
    <div className="info-box">
      <h3>Education</h3>
      <ul>
        <li>
          <BiologyMaster />
        </li>
        <li>
          <DotNetDevloper />
        </li>
      </ul>
    </div>
  );
};

export default Education;
