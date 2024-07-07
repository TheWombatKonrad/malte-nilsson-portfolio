import "./IntroCard.css";
import profilePic from "../assets/images/profile-pic.webp";

const IntroCard = () => {
  return (
    <div id="intro-card">
      <div>
        <div>
          <h1>Malte Nilsson</h1>
          <h2>.NET Developer</h2>
        </div>

        <img alt="Me, outside." src={profilePic} loading="eager" />
      </div>
      <p
        style={{
          background: "rgb(28, 27, 41, 0.7)",
          padding: "5px",
          textAlign: "center",
        }}
      >
        I'm looking for a new job!
      </p>
    </div>
  );
};

export default IntroCard;
