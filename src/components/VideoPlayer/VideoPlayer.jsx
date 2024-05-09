import "./VideoPlayer.scss";

function VideoPlayer({ video }) {
  return (
    <section className="video-player">
      <video controls className="video" poster={video.image}></video>
    </section>
  );
}

export default VideoPlayer;
