import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsSection from "../../components/CommentsSection/CommentsSection";
import NextVideos from "../../components/NextVideos/NextVideos";

function Home() {
  const API_KEY = process.env.API_KEY || "f9a10329-0cab-4ed8-b0be-973a0d16d430";
  const URL = process.env.API_URL || "http://localhost:8080";

  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  const { videoId } = useParams();

  async function fetchVideoDetails(idVideo) {
    try {
      const response = await axios.get(
        `${URL}/videos/${idVideo}?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching video details: ", error);
    }
  }

  async function fetchVideoData() {
    try {
      const response = await axios.get(`${URL}/videos?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching video data: ", error);
    }
  }

  useEffect(() => {
    let active = true;
    async function fetchAllVideos() {
      const videoData = await fetchVideoData();
      if (active && videoData) {
        setAllVideos(videoData);
        const selectedVideo = await fetchVideoDetails(
          videoId || videoData[0].id
        );
        if (selectedVideo) {
          setCurrentVideo(selectedVideo);
        }
      }
    }
    fetchAllVideos();
    return () => {
      active = false;
    };
  }, [videoId]);

  useEffect(() => {
    let active = true;
    async function updateCurrentVideo() {
      const video = await fetchVideoDetails(videoId);
      if (active && video) {
        setCurrentVideo(video);
      }
    }
    if (videoId) {
      updateCurrentVideo();
    } else if (allVideos.length > 0) {
      setCurrentVideo(allVideos[0]);
    }
    return () => {
      active = false;
    };
  }, [videoId, allVideos]);

  async function submitComment(newComment) {
    try {
      await axios.post(
        `${URL}/videos/${currentVideo.id}/comments?api_key=${API_KEY}`,
        newComment
      );
      const updatedVideo = await fetchVideoDetails(currentVideo.id);
      if (updatedVideo) {
        setCurrentVideo(updatedVideo);
      }
    } catch (error) {
      console.error("Error submitting comment: ", error);
    }
  }

  async function deleteComment(commentId) {
    try {
      await axios.delete(
        `${URL}/videos/${currentVideo.id}/comments/${commentId}?api_key=${API_KEY}`
      );
      const updatedVideo = await fetchVideoDetails(currentVideo.id);
      if (updatedVideo) {
        setCurrentVideo(updatedVideo);
      }
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  }

  return (
    <>
      <VideoPlayer video={currentVideo} />
      <div className="content">
        <div className="content__video">
          <VideoDescription video={currentVideo} />
          <CommentsSection
            video={currentVideo}
            submitComment={submitComment}
            deleteComment={deleteComment}
          />
        </div>
        <NextVideos
          nextVideos={allVideos.filter((video) => video.id !== currentVideo.id)}
        />
      </div>
    </>
  );
}

export default Home;
