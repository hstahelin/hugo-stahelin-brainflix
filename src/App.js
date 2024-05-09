import { useState } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  const [allVideos, setAllVideos] = useState(videos);
  const [allVideoDetails, setAllVideoDetails] = useState(videoDetails);
  const [mainVideo, setMainVideo] = useState(allVideoDetails[0]);
  return (
    <>
      <Header />
      <VideoPlayer video={mainVideo} />
    </>
  );
}

export default App;
