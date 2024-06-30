import "./VideoUpload.scss";
import Image from "../../assets/images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VideoUpload() {
  const URL = "http://localhost:8080";

  const [formData, setFormData] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit() {
    if (formData.title && formData.description) {
      const newVideo = {
        title: formData.title,
        description: formData.description,
        channel: "Mohan Muruge",
        image: "http://localhost:8080/images/sample.jpg",
      };
      const createdVideo = await postVideoData(newVideo);
      navigate(`/video/${createdVideo.id}`);
    } else {
      alert("Please fill out Title and Description.");
    }
  }

  async function postVideoData(video) {
    try {
      const response = await axios.post(`${URL}/videos`, video);
      return response.data;
    } catch (error) {
      console.error("Error posting video data: ", error);
    }
  }

  function handleCancel() {
    setFormData({ title: "", description: "" });
  }
  return (
    <>
      <hr className="video-divider" />
      <section className="video-upload">
        <h1 className="video-upload__title page-header">Upload Video</h1>
        <hr className="video-upload__divider" />
        <div className="video-upload__content">
          <div className="thumbnail">
            <h2 className="thumbnail__title labels-and-buttons">
              VIDEO THUMBNAIL
            </h2>
            <img
              src={Image}
              alt="Video upload thumbnail"
              className="thumbnail__image"
            />
          </div>
          <form className="upload-form">
            <label
              htmlFor="title"
              className="upload-form__label labels-and-buttons"
            >
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="upload-form__input"
              placeholder="Add a title to your video"
              value={formData.title}
              onChange={handleChange}
            />
            <label
              htmlFor="description"
              className="upload-form__label labels-and-buttons"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload-form__input"
              name="description"
              id="description"
              rows="4"
              placeholder="Add a description to your video"
              value={formData.description}
              onChange={handleChange}
            />
          </form>
        </div>
        <hr className="video-upload__divider" />
        <div className="upload-form__buttons">
          <button
            className="upload-form__button upload-form__button--cancel labels-and-buttons"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button
            className="upload-form__button upload-form__button--publish labels-and-buttons"
            onClick={handleSubmit}
          >
            PUBLISH
          </button>
        </div>
      </section>
    </>
  );
}

export default VideoUpload;
