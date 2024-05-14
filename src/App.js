import { useState } from "react";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import VideoDescription from "./components/VideoDescription/VideoDescription";

function App() {
  const [allVideos, setAllVideos] = useState(videos);
  const [allVideosDetails, setAllVideoDetails] = useState(videoDetails);
  const [mainVideo, setMainVideo] = useState(allVideosDetails[0]);
  return (
    <>
      <Header />
      <VideoPlayer video={mainVideo} />
      <VideoDescription video={mainVideo} />
    </>
  );
}

export default App;
