import * as React from "react";
import Specgurka from "./specgurka";
import { infoBox } from "../layout.module.css";
import WonderfulRabbits from "./wonderfulRabbits";

const Portfolio = () => {
  return (
    <div className={infoBox}>
      <h3>Portfolio</h3>
      <ul>
        <li>
          <Specgurka />
        </li>
        <li>
          <WonderfulRabbits />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
