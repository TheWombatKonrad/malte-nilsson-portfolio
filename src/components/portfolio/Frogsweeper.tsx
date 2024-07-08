import ExpandableDiv from "../ExpandableDiv";
import ImageLink from "../ImageLink";
import frogsweeperGameBoard from "../../assets/images/frogsweeper.webp";

const Frogsweeper = () => {
  return (
    <ExpandableDiv
      date="2024"
      title="Frogsweeper - Let's Sweep Frogs (React/TS)"
      id="frogsweeper"
    >
      <p>
        This game is being made as a present for a friend who likes Minesweeper
        and frogs. It is not currently finished, but, while ugly, it is sort of
        playable. The next step is to make gameplay a bit more easy and to add
        pretty artwork of frogs, curtesy of my brother.
      </p>
      <ImageLink
        image={frogsweeperGameBoard}
        url={"https://thewombatkonrad.github.io/frogsweeper/"}
      />
      <a
        href="https://github.com/TheWombatKonrad/frogsweeper"
        target="_blank"
        rel="noreferrer"
      >
        Link to the project on Github 🐸
      </a>
    </ExpandableDiv>
  );
};

export default Frogsweeper;
