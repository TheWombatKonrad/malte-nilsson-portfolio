import "./ImageLink.css";

function ImageLink({ image, url }) {
  return (
    <div id="image-link">
      <a href={url} target="_blank" rel="noreferrer">
        <img alt="The Frogsweeper gameboard." src={image} />
      </a>
    </div>
  );
}

export default ImageLink;
