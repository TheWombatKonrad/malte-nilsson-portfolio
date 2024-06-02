import CustomModal from "../CustomModal";

const DotNetDevloper = () => {
  return (
    <CustomModal
      link={".NET Developer"}
      date={"September 2021 - June 2023"}
      title={".NET Developer"}
    >
      <p>
        I studied .NET developing at Teknikhögskolan. Other than the courses
        listed below, I also did 23 weeks in total of internship at Nonsultant
        and Volvo.
      </p>

      <ul style={{ alignSelf: "flex-start", paddingLeft: "15px" }}>
        <li>C#, programming in a context</li>
        <li>Databses in a context</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Cloud-based applications</li>
        <li>Producing and delivering software</li>
      </ul>
    </CustomModal>
  );
};

export default DotNetDevloper;
