import VideoCard from "../VideoCard/VideoCard";
import "./NextVideos.scss";

import allVideos from "../../data/videos.json";

function NextVideos({ mainVideoId }) {
  return (
    <section className="next-videos">
      <h3 className="next-videos__title subheader">NEXT VIDEOS</h3>
      <ul className="next-list">
        {allVideos
          .filter((video) => video.id !== mainVideoId)
          .map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
      </ul>
    </section>
  );
}

export default NextVideos;
