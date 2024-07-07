import ExpandableDiv from "../ExpandableDiv";

const Nonsultant = () => {
  return (
    <ExpandableDiv
      title="Internship at Nonsultant"
      date="Oktober 2022 - December 2022"
      id="nonsultant"
    >
      <p>
        I did an intership at Nonsultant, a consulant business. Together with
        another student and our supervisor we wrote a program to sync Specflow
        test results to e.g. Azure DevOps.
      </p>
      <a
        href="https://github.com/Nonsultant/specgurka"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "10px" }}
      >
        Here's a link to the project on Github
      </a>
    </ExpandableDiv>
  );
};

export default Nonsultant;
