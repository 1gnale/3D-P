import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../../assets/icons";

const InfoBox = ({ text, link, bntText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {bntText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderObject = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm
      <span className="font-semibold mx-2 text-white">Juan Ignacio Mena</span>
      👋
      <br />A Software Developer from Argentina
    </h1>
  ),
  2: (
    <InfoBox
      text="I woked with some companies and picked up many skills along the way"
      link="/about"
      bntText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="I had multiple projects to success over the time. Curious about them?"
      link="/projets"
      bntText="Look my work"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      bntText="Let's talk"
    />
  ),
};

const HomePopUp = ({ currentStage }) => {
  return renderObject[currentStage] || null;
};

export default HomePopUp;
