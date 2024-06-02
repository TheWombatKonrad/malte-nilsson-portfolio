import * as React from "react";
import CustomModal from "../CustomModal";

const Nonsultant = () => {
  return (
    <CustomModal
      link={"Intership at Nonsultant"}
      date={"Oktober 2022 - December 2022"}
      title={"Internship at Nonsultant"}
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
    </CustomModal>
  );
};

export default Nonsultant;
