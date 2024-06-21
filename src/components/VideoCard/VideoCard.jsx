import { Link } from "react-router-dom";
import "./VideoCard.scss";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="link">
      <li
        className="item"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <img
          className="item__image"
          src={video.image}
          alt={`Video preview: ${video.title}`}
        />
        <div className="item__description">
          <h4 className="item__title subheader">{video.title}</h4>
          <h4 className="item__channel body-copy">{video.channel}</h4>
        </div>
      </li>
    </Link>
  );
}

export default VideoCard;
