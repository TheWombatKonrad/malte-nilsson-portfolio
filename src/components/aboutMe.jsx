import * as React from "react";
import { infoBox } from "./layout.module.css";

const AboutMe = () => {
  return (
    <div className={infoBox}>
      <h3>About Me</h3>
      <p>
        I recently graduated from Teknikhögskolan where I studied to become a
        .NET developer. I'm inquisitive and am looking to develop my skills as a
        programmer.
      </p>
    </div>
  );
};

export default AboutMe;
