import Specgurka from './Specgurka';
import Frogsweeper from './Frogsweeper';
import ZombieHouse2000 from './ZombieHouse2000';
import WildlifeTrackerSystem from './WildlifeTrackerSystem';

const Portfolio = () => {
  return (
    <div className='info-box'>
      <h3>Portfolio</h3>
      <ul>
        <li>
          <WildlifeTrackerSystem />
        </li>
        <li>
          <Frogsweeper />
        </li>
        <li>
          <Specgurka />
        </li>
        <li>
          <ZombieHouse2000 />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
