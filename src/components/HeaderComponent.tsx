import "./HeaderComponent.css";
import profilePic from "../assets/images/profile-pic.webp"

const HeaderComponent = () => {
  return (
    <header>
      <div id="header-main">
        <div>
          <h1>Malte Nilsson</h1>
          <h2>.NET Developer</h2>
        </div>

        <img
          alt="Me, outside."
          src={profilePic}
          loading="eager"
        />
      </div>
      <p>I'm looking for a new job!</p>
    </header>
  );
};

export default HeaderComponent;
