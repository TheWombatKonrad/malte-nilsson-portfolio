import Nonsultant from './Nonsultant';
import Parasites from './Parasites';
import Volvo from './Volvo';

const Experience = () => {
  return (
    <div className='info-box'>
      <h3>Experience</h3>
      <ul>
        <li>
          <Parasites />
        </li>
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
