import CustomModal from "../CustomModal";
import ImageLink from "../ImageLink";

const Frogsweeper = () => {
  return (
    <CustomModal
      link={"Frogsweeper 🐸"}
      date={"2024"}
      title={"Frogsweeper - Let's Sweep Frogs"}
    >
      <p>
        This game is being made as a present for a friend who likes Minesweeper
        and frogs. It is not currently finished, but, while ugly, it is sort of
        playable. The next step is to make gameplay a bit more easy and to add
        pretty artwork of frogs, curtesy of my brother.
      </p>
      <ImageLink
        imageLink={"frogsweeper.png"}
        url={"https://thewombatkonrad.github.io/frogsweeper/"}
      />
      <a
        href="https://github.com/TheWombatKonrad/frogsweeper"
        target="_blank"
        rel="noreferrer"
      >
        Link to the project on Github 🐸
      </a>
    </CustomModal>
  );
};

export default Frogsweeper;
