import "./VideoCard.scss";

function VideoCard({ video, handleSelectVideo }) {
  return (
    <li className="item" onClick={() => handleSelectVideo(video.id)}>
      <img className="item__image" src={video.image} alt="" />
      <div className="item__description">
        <h4 className="item__title subheader">{video.title}</h4>
        <h4 className="item__channel body-copy">{video.channel}</h4>
      </div>
    </li>
  );
}

export default VideoCard;
