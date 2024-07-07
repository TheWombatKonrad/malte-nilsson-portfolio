import "./ImageLink.css";

function ImageLink(props: { image: string; url: string }) {
  return (
    <div id="image-link">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img alt="The Frogsweeper gameboard." src={props.image} />
      </a>
    </div>
  );
}

export default ImageLink;
