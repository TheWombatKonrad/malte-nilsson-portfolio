import ExpandableDiv from '../ExpandableDiv';

const WildlifeTrackerSystem = () => {
  return (
    <ExpandableDiv
      title='Wildlife Tracker System (C#/WPF)'
      date='2025'
      id='wildlife-tracker-system'
    >
      <p>
        This was an assignment I did for a C# course. I hadn't worked with WPF
        before (only WinForms) and found it useful. I set it up according to
        MVVM (or at least tried to), and I found WPF and MVVM fit my
        organisation inclinations.
      </p>
      <a
        href='https://github.com/TheWombatKonrad/WildlifeTrackerSystem'
        target='_blank'
        rel='noreferrer'
        style={{ marginTop: '5px' }}
      >
        Link to the project on Github
      </a>
    </ExpandableDiv>
  );
};

export default WildlifeTrackerSystem;
