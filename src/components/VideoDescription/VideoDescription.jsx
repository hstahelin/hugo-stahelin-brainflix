import "./VideoDescription.scss";

import ViewsIcon from "../../assets/icons/views.svg";
import LikesIcon from "../../assets/icons/likes.svg";

function VideoDescription({ video, handleLike }) {
  const date = new Date(video.timestamp);
  return (
    <main className="video-description">
      <h1 className="video-description__title page-header">{video.title}</h1>
      <hr className="video-description__break" />
      <div className="video-info">
        <div className="video-info__info">
          <h2 className="video-info__channel subheader">By {video.channel}</h2>
          <p className="video-info__timestamp body-copy">
            {date.toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="video-info__counters">
          <div className="video-info__views">
            <img
              src={ViewsIcon}
              alt="Number of views"
              className="video-info__views-icon"
            />
            <p className="video-info__views-counter body-copy">{video.views}</p>
          </div>
          <div className="video-info__likes">
            <img
              src={LikesIcon}
              alt="Number of likes"
              className="video-info__likes-icon"
              onClick={handleLike}
            />
            <p className="video-info__likes-counter body-copy">{video.likes}</p>
          </div>
        </div>
      </div>
      <hr className="video-description__break" />
      <p className="video-description__description body-copy">
        {video.description}
      </p>
    </main>
  );
}

export default VideoDescription;
