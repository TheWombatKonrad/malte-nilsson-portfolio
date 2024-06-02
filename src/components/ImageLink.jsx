import "./ImageLink.css";

function ImageLink({ imageLink, url }) {
  return (
    <div id="image-link">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          alt="The Frogsweeper gameboard."
          src={require(`../images/${imageLink}`)}
        />
      </a>
    </div>
  );
}

export default ImageLink;
