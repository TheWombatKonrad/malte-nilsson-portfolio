import "./CustomModal.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import useWindowSize from "../hooks/useWindowSize";

if (typeof document != "undefined") {
  Modal.setAppElement(document.getElementsByTagName("html"));
}

const CustomModal = ({ link, date, title, children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [customStyles, setCustomStyles] = useState({});
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize[0] >= "800") {
      setCustomStyles({ ...baseCustomStyles, ...customStylesBig });
    } else {
      setCustomStyles({ ...baseCustomStyles, ...customStylesSmall });
    }
  }, [windowSize]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type="text" onClick={openModal} className="open-modal-button">
        <span>
          {link} <FontAwesomeIcon icon={faAnglesRight} size="sm" />
        </span>
      </button>
      <Modal
        contentLabel={title}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: customStyles,
        }}
      >
        <div className="inner-modal">
          <div id="modal-top-bar">
            <p>{date}</p>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div id="modal-content">
            <h3>{title}</h3>
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;

const baseCustomStyles = {
  height: "fit-content",
  maxHeight: "100vh",
  margin: "auto",
  padding: 0,
  border: "2px solid rgb(28, 27, 41)",
  borderRadius: "20px",
  background: "rgb(90, 77, 133)",
  overflow: "hidden",
};

const customStylesBig = {
  width: "600px",
};

const customStylesSmall = {};
