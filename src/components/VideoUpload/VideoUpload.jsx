import "./VideoUpload.scss";
import Image from "../../assets/images/Upload-video-preview.jpg";

function VideoUpload() {
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
            <img src={Image} alt="" className="thumbnail__image" />
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
            />
          </form>
        </div>
        <hr className="video-upload__divider" />
        <div className="upload-form__buttons">
          <button className="upload-form__button upload-form__button--cancel labels-and-buttons">
            CANCEL
          </button>
          <button className="upload-form__button upload-form__button--publish labels-and-buttons">
            PUBLISH
          </button>
        </div>
      </section>
    </>
  );
}

export default VideoUpload;
