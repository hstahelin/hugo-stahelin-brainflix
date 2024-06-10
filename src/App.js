import "./App.scss";

import { useState } from "react";

import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoUpload from "./components/VideoUpload/VideoUpload";

function App() {
  const [allVideos, setAllVideos] = useState(videos);
  const [allVideosDetails, setAllVideoDetails] = useState(videoDetails);
  const [mainVideo, setMainVideo] = useState(allVideosDetails[0]);

  function handleSelectVideo(videoId) {
    setMainVideo(allVideosDetails.find((video) => video.id === videoId));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Header />
      <VideoUpload />
      {/* <VideoPlayer video={mainVideo} />
      <div className="content">
        <div className="content__video">
          <VideoDescription video={mainVideo} />
          <CommentsSection video={mainVideo} />
        </div>
        <NextVideos
          mainVideoId={mainVideo.id}
          allVideos={allVideos}
          handleSelectVideo={handleSelectVideo}
        />
      </div> */}
    </>
  );
}

export default App;
