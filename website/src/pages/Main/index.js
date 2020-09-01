import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/images/logo.svg";
import mainImage from "../../assets/images/main-image.png";

import learnIcon from "../../assets/images/icons/learn-surf.png";
import teachIcon from "../../assets/images/icons/teach-surf.png";
import hangLoose from "../../assets/images/icons/hangloose.png";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImage} alt="logo" />
          <h2>Ensine ou aprenda a pegar onda</h2>
        </div>
        <img src={mainImage} alt="bora surfar landing" className="hero-image" />
        <div className="buttons-container">
          <Link to="/learn-surf" className="learn">
            <img src={learnIcon} alt="learn surf" />
            Aprender
          </Link>
          <Link to="/teach-surf" className="teach">
            <img src={teachIcon} alt="teach surf" />
            Ensinar
          </Link>
        </div>
        <div className="surf-quote">
          <span>Todos que sabem surfar começaram boiando</span>
          <img src={hangLoose} alt="hang loose sign" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
