import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="info-box">
      <h3>Contact Me</h3>
      <ul id="contacts">
        <li>
          <a
            href="mailto: malte.nilsson95@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" title="email" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/malte-nilsson/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" title="linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
