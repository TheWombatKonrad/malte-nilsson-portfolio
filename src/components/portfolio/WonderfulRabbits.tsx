import ExpandableDiv from "../ExpandableDiv";

const WonderfulRabbits = () => {
  return (
    <ExpandableDiv
      title="Wonderful Rabbits (C#)"
      date="2023"
      id="wonderful-rabbits"
    >
      <p>
        After graduating I have been working on a small project, mainly to
        practice programming. The project is still in it's very early phases and
        currently only the backend is ready to be shown. The backend uses .NET
        and Entity Framework Core. The frontend uses React and TypeScript. The
        goal of the site is that users will be able to register their rabbits
        and upload pictures of them.
      </p>
      <a
        href="https://github.com/TheWombatKonrad/RabbitsAPI"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "5px" }}
      >
        Link to the public parts of the project on Github
      </a>
    </ExpandableDiv>
  );
};

export default WonderfulRabbits;
