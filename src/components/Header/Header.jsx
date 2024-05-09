import "./Header.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import UserImage from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="site-header">
      <div className="site-logo">
        <img src={Logo} className="site-logo__image" alt="Site logo" />
      </div>
      <div className="site-options">
        <div className="site-options__search-section">
          <input
            className="site-options__search"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
          <img
            src={UserImage}
            alt="User avatar"
            className="site-options__avatar-img site-options__avatar-img--mobile"
          />
        </div>
        <button className="site-options__upload labels-and-buttons">
          UPLOAD
        </button>
        <img
          src={UserImage}
          alt="User avatar"
          className="site-options__avatar-img site-options__avatar-img--desktop"
        />
      </div>
    </header>
  );
}

export default Header;
