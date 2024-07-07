import "./ExpandableDiv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ExpandableDiv({ title, date, children, id }) {
  const [arrow, setArrowDirection] = useState(faAnglesRight);

  const onClick = () => {
    const element = document.getElementById(id).querySelector("div");

    if (element.hidden) openDiv(element);
    else closeDiv(element);
  };

  const openDiv = (element) => {
    element.hidden = false;
    setArrowDirection(faAnglesLeft);
  };

  const closeDiv = (element) => {
    element.hidden = true;
    setArrowDirection(faAnglesRight);
  };

  return (
    <div className="expandable-div" id={id}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={arrow} size="sm" />
        <p>{title}</p>
      </button>
      <div hidden className="content">
        <p>{date}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ExpandableDiv;
