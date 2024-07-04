import "./VideoUpload.scss";
import Image from "../../assets/images/Upload-video-preview.jpg";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VideoUpload() {
  const URL = "http://localhost:8080";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: {},
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isImageValid, setIsImageValid] = useState(false);

  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit() {
    if (formData.title && formData.description && isImageValid) {
      const newVideo = new FormData();
      newVideo.append("title", formData.title);
      newVideo.append("description", formData.description);
      newVideo.append("channel", "Mohan Muruge");
      newVideo.append("image", `${URL}/images/sample.jpg`);
      newVideo.append("file", formData.file);

      const createdVideo = await postVideoData(newVideo);
      navigate(`/video/${createdVideo.id}`);
    } else {
      setError(
        "Submission Error: Title, description, and image are all required to proceed."
      );
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
    setFormData({ title: "", description: "", file: {} });
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setIsImageValid(false);
    setError("");
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (validImageTypes.includes(fileType)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);

        setFormData({
          ...formData,
          file: event.target.files[0],
        });
        setError("");
        setIsImageValid(true);
      } else {
        setError("Please select a valid image file (JPEG, PNG, GIF).");
        setIsImageValid(false);
      }
    }
  }
  return (
    <>
      <hr className="video-divider" />
      <section className="video-upload">
        <h1 className="video-upload__title page-header">Upload Video</h1>
        <hr className="video-upload__divider" />
        <form className="upload-form">
          <div className="video-upload__content">
            <div className="video-upload__thumbnail">
              <label
                htmlFor="thumbnail"
                className="thumbnail__title labels-and-buttons"
              >
                VIDEO THUMBNAIL
              </label>
              <img
                src={previewUrl || Image}
                alt="Video upload thumbnail"
                className="thumbnail__image"
              />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                name="thumbnail"
                id="thumbnail"
                className="thumbnail__upload"
                onChange={handleFileChange}
              />
            </div>
            <div className="video-upload__info">
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
            </div>
          </div>
        </form>
        {error && <p className="thumbnail__error body-copy">{error}</p>}
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
