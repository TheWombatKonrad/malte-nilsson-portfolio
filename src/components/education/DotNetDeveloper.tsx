import ExpandableDiv from "../ExpandableDiv";

const DotNetDevloper = () => {
  return (
    <ExpandableDiv
      title=".NET Developer"
      date="September 2021 - June 2023"
      id=".net"
    >
      <p>
        I studied .NET developing at Teknikhögskolan. Other than the courses
        listed below, I also did 23 weeks in total of internship at Nonsultant
        and Volvo.
      </p>

      <ul style={{ listStyle: "circle", marginLeft: "-10px" }}>
        <li>C#, programming in a context</li>
        <li>Databses in a context</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Cloud-based applications</li>
        <li>Producing and delivering software</li>
      </ul>
    </ExpandableDiv>
  );
};

export default DotNetDevloper;
