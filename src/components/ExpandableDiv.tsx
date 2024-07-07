import "./ExpandableDiv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useState } from "react";

function ExpandableDiv(props: {
  title: string;
  date: string;
  children: ReactNode;
  id: string;
}) {
  const [arrow, setArrowDirection] = useState(faAnglesRight);

  const onClick = () => {
    const element: HTMLDivElement = document
      .getElementById(props.id)!
      .querySelector("div")!;

    if (element.hidden) openDiv(element);
    else closeDiv(element);
  };

  const openDiv = (element: HTMLDivElement) => {
    element.hidden = false;
    setArrowDirection(faAnglesLeft);
  };

  const closeDiv = (element: HTMLDivElement) => {
    element.hidden = true;
    setArrowDirection(faAnglesRight);
  };

  return (
    <div className="expandable-div" id={props.id}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={arrow} size="sm" />
        <p>{props.title}</p>
      </button>
      <div hidden className="content">
        <p>{props.date}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default ExpandableDiv;
