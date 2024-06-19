import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import videos from "../../data/videos.json";
// import videoDetails from "../../data/video-details.json";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";

function Home() {
  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});
  const [defaultVideo, setDefaultVideo] = useState({});

  const { videoId } = useParams();

  async function fetchVideoDetails(idVideo) {
    const api_key = "f9a10329-0cab-4ed8-b0be-973a0d16d430";
    const response = await axios.get(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${idVideo}?api_key=${api_key}`
    );
    // console.log("getVideoDetails: ", response.data);

    return response.data;
  }

  async function fetchVideoData() {
    const api_key = "f9a10329-0cab-4ed8-b0be-973a0d16d430";
    const response = await axios.get(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${api_key}`
    );
    return response.data;
  }

  useEffect(() => {
    let active = true;
    async function fetchAllVideos() {
      const videoData = await fetchVideoData();
      if (active) {
        // console.log("DATA: ", response.data);
        setAllVideos(videoData);
        const selectedVideo = await fetchVideoDetails(
          videoId || videoData[0].id
        );
        const defaultVid = await fetchVideoDetails(videoData[0].id);

        // console.log("selectedVideo: ", selectedVideo);
        setCurrentVideo(selectedVideo);
        setDefaultVideo(defaultVid);
      }
    }
    fetchAllVideos();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    async function getMainVideo(id) {
      //   console.log("VIDEO ID (videoId): ", id);
      setCurrentVideo(await fetchVideoDetails(id));
    }
    if (videoId) {
      getMainVideo(videoId);
    } else {
      setCurrentVideo(defaultVideo);
    }

    return () => {
      active = false;
    };
  }, [videoId, allVideos]);

  async function submitComment(newComment) {
    const api_key = "f9a10329-0cab-4ed8-b0be-973a0d16d430";
    const response = await axios.post(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${currentVideo.id}/comments?api_key=${api_key}`,
      newComment
    );
    const videoData = await fetchVideoData();
    setAllVideos(videoData);
  }

  return (
    <>
      {/* <h1>TEST 02 - {allVideos.length}</h1> */}
      <VideoPlayer video={currentVideo} />
      <div className="content">
        <div className="content__video">
          <VideoDescription video={currentVideo} />
          <CommentsSection video={currentVideo} submitComment={submitComment} />
        </div>
        <NextVideos
          nextVideos={allVideos.filter((video) => video.id !== currentVideo.id)}
        />
      </div>
    </>
  );
}

export default Home;
