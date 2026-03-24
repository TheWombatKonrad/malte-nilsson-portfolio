import ExpandableDiv from '../ExpandableDiv';

const BiologyMaster = () => {
  return (
    <ExpandableDiv
      title={'Intership at Volvo'}
      date={'February 2023 - May 2023'}
      id='volvo'
    >
      <p>
        I did an intership at Volvo where I migrated part of an existing
        application from AngularJS to React, integrating the new React component
        in the old code. We worked with Scrum, and the project involved working
        with React on the frontend and C# on the backend. The project had mock
        servers and additional services set up with Kubernetes and Docker.
      </p>
    </ExpandableDiv>
  );
};

export default BiologyMaster;
