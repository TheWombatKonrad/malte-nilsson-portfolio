import "./App.css";
import Layout from "./components/Layout";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import HeaderComponent from "./components/HeaderComponent";
import IntroCard from "./components/IntroCard";

function App() {
  return (
    <>
      <HeaderComponent />

      <Layout>
        <div className="container" id="intro-card-container">
          <IntroCard />
        </div>

        <div className="container" id="info">
          <AboutMe />
          <Skills />
          <Education />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </Layout>
    </>
  );
}

export default App;
