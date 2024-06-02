import * as React from "react";
import CustomModal from "../CustomModal";

const BiologyMaster = () => {
  return (
    <CustomModal
      link={"Master in Biology"}
      date={"September 2014 - June 2019"}
      title={"Master in Evolutionary and Behavioral Ecology"}
    >
      <p>
        I got a master in Evolutionary and Behavioral Ecology from Gothenburg
        University. I did my master's thesis on parasite mediated sexual
        selection, which meant measuring the color saturation of the Southern
        Red Bishop's feathers and comparing that to it's parasite load.
      </p>
    </CustomModal>
  );
};

export default BiologyMaster;
