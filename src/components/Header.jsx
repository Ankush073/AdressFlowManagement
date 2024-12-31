import React from "react";
import "./Header.css"; // Add this CSS file for styling
import avatar from "../assets/Avatar.png"; // Replace with the actual path to your avatar image
import logo from "../assets/logo.webp"; // Replace with the actual path to your logo

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Avatar and Login with Delivery Info */}
      <div className="header-left">
        <img
          src={avatar}
          alt="Avatar"
          className="avatar"
          onClick={() => alert("Avatar clicked!")} // Replace with desired click behavior
        />
        <div className="welcome-info">
          <span>
            Welcome, Guest{" "}
            <a href="/login" className="login-link">
              (Login)
            </a>
          </span>
          <div className="delivery-info">
            Deliver to <b>400071</b>
          </div>
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="header-right">
        <i className="search-icon" title="Search">🔍</i>
        <img src={logo} alt="Logo" className="logo" title="Logo Icon" />
      </div>
    </header>
  );
};

export default Header;
