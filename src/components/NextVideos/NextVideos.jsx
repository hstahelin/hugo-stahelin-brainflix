import "./NextVideos.scss";
import VideoCard from "../VideoCard/VideoCard";

function NextVideos({ nextVideos }) {
  return (
    <section className="next-videos">
      <h3 className="next-videos__title subheader">NEXT VIDEOS</h3>
      <ul className="next-list">
        {nextVideos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </ul>
    </section>
  );
}

export default NextVideos;
