import "./HeaderComponent.css";

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
          src={require("../images/profile-pic.jpg")}
          loading="eager"
        />
      </div>
      <p>I'm looking for a new job!</p>
    </header>
  );
};

export default HeaderComponent;
