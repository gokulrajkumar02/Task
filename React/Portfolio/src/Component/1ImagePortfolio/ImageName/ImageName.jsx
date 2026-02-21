import React from "react";
import "./ImageName.css";

import ProfileImage from "../../../assets/Profile.svg";
import { Link } from "react-router-dom";
import FacebookImage from "../../../assets/Facebook.svg";
import TwitterImage from "../../../assets/Twitter.svg";
import LinkedInImage from "../../../assets/Linkeding.svg";
import YoutubeImage from "../../../assets/Youtube.svg";
import DribbbleImage from "../../../assets/Dribbble.svg";

const iconImage = [
  { id: 1, href: "", src: FacebookImage, alt: "FacebookImage" },
  { id: 2, href: "", src: TwitterImage, alt: "TwitterImage" },
  { id: 3, href: "", src: LinkedInImage, alt: "LinkedInImage" },
  { id: 4, href: "", src: YoutubeImage, alt: "YoutubeImage" },
  { id: 5, href: "", src: DribbbleImage, alt: "DribbbleImage" },
];

const ImageName = () => {
  return (
    <div>
      <div className="Image-name-container">
        <img src={ProfileImage} alt="" className="Image-name-container-image" />
        <p className="Image-name-container-name">Rayan Adlardard</p>
        <p className="Image-name-container-role">Font-end Developer</p>
        <div className="Image-name-container-icon">
          {iconImage.map((items) => {
            return (
              <a href={items.href} key={items.id}>
                <img src={items.src} alt={items.alt} />
              </a>
            );
          })}
        </div>
      </div>
      <hr className="Image-name-container-hr" />
    </div>
  );
};

export default ImageName;
