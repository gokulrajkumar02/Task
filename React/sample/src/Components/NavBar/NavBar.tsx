import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/images.png";
import instgram from "../../assets/Instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

type navigateImage = {
  id: number;
  label: string;
  path: string;
};

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const navigateLink = [
    { id: 1, label: "Home", path: "/home" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "PortFoloi", path: "/portfoloi" },
    { id: 4, label: "Service", path: "/service" },
    { id: 5, label: "Pages", path: "/pages" },
    { id: 6, label: "Contact", path: "/contact" },
    { id : 7 , label : "Student Detail",path : "/studentDetails"}
  ];
  const navigateImageLink: navigateImage[] = [
    { id: 1, label: facebook, path: "https://www.facebook.com/" },
    { id: 2, label: twitter, path: "https://www.twitter.com/" },
    { id: 3, label: instgram, path: "https://www.instagram.com/" },
    { id: 4, label: "▶️", path: "https://www.youtube.com/" },
  ];

  return (
    <div className="container">
        <div className="Nav-bar">
          <input type="checkBox" className="menu-bar" id="menu" />
          <label
            htmlFor="menu"
            className="menu-label"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            {showSideBar ? "X" : "☰"}
          </label>
          <div className="Nav-logo">
            <img src={logo} alt="site-logo" />
            <span>VIDEOGRAPH</span>
          </div>
          <nav className="Nav-items">
            {navigateLink.map((items) => {
              return (
                <Link to={items.path} key={items.id} id="">
                  {items.label}
                </Link>
              );
            })}
          </nav>

          <div className="Nav-image">
            {navigateImageLink.map((items) => (
              <a href={items.path} key={items.id} target="_blank">
                {<img src={items.label} alt="" />}
              </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default NavBar;
