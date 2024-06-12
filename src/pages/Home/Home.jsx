import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideos from "../../components/NextVideos/NextVideos";

function Home() {
  const [allVideos, setAllVideos] = useState(videos);
  const [allVideosDetails, setAllVideoDetails] = useState(videoDetails);
  const [mainVideo, setMainVideo] = useState(allVideosDetails[0]);

  const { videoId } = useParams();

  useEffect(() => {
    if (videoId) {
      setMainVideo(allVideosDetails.find((video) => video.id === videoId));
    }
  }, [videoId]);

  return (
    <>
      <VideoPlayer video={mainVideo} />
      <div className="content">
        <div className="content__video">
          <VideoDescription video={mainVideo} />
          <CommentsSection video={mainVideo} />
        </div>
        <NextVideos mainVideoId={mainVideo.id} allVideos={allVideos} />
      </div>
    </>
  );
}

export default Home;
