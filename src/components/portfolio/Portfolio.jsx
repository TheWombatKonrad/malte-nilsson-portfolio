import Specgurka from "./Specgurka";
import WonderfulRabbits from "./WonderfulRabbits";
import Frogsweeper from "./Frogsweeper";

const Portfolio = () => {
  return (
    <div className="info-box">
      <h3>Portfolio</h3>
      <ul>
        <li>
          <Specgurka />
        </li>
        <li>
          <WonderfulRabbits />
        </li>
        <li>
          <Frogsweeper />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
