import ExpandableDiv from "../ExpandableDiv";

const Specgurka = () => {
  return (
    <ExpandableDiv
      title="Specgurka (BDD Gherkin Specflow)"
      date="2022"
      id="specgurka"
    >
      <p>
        While doing an intership at Nonsultant, me and another student, with
        support form our supervisor, created Specgurka. It's a tool for syncing
        Gherkin feature files and Specflow test results to different services,
        e.g. Azure DevOps.
      </p>
      <a
        href="https://github.com/Nonsultant/specgurka"
        target="_blank"
        rel="noreferrer"
        style={{ marginTop: "5px" }}
      >
        Link to the project on Github
      </a>
    </ExpandableDiv>
  );
};

export default Specgurka;
