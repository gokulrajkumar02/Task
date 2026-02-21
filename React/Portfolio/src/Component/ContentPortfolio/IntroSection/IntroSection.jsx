import React, { useEffect, useState } from "react";
import "./IntroSection.css";
import RightArrow from "../../../assets/Arrow.svg";
import PersonImage from "../../../assets/YourImage.svg";

const IntroSection = () => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    setShowName(true);
  }, []);

  return (
    <div className="introsection-container">
      <div className="intosection-container-content">
        <h1
          className={`intosection-container-content-title ${
            showName ? "show" : ""
          }`}
        >
          I’m Rayan Adlrdard <span>Front-end</span> Developer
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>

        <button>
          <label htmlFor="">HIRE ME</label> <img src={RightArrow} alt="rightArrow" />
        </button>
      </div>

      <img
        src={PersonImage}
        alt="PersonImage"
        className="introsection-container-image"
      />
    </div>
  );
};

export default IntroSection;
