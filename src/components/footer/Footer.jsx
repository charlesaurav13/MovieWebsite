import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="infoText">
          Welcome to our one-stop movie aficionado's paradise! Our website is
          your ultimate destination for all things related to the latest movies
          and TV shows. Whether you're a cinephile seeking the most recent
          blockbuster releases or a TV series enthusiast looking for the scoop
          on the hottest shows, we've got you covered. What sets our website
          apart is our passion for storytelling. We don't just stop at giving
          you the basic details. We go the extra mile to delve into the
          characters and roles that make these stories come to life. For each
          movie and TV show, we provide you with character descriptions, their
          significance in the storyline, and the talented actors who bring them
          to life. It's not just about knowing what the story is about; it's
          about understanding the intricacies of the characters and their roles
          within the narrative.
        </div>
        <div className="infoText">All Rights Reserved @2023.</div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/saurav-4b3444204/" target="_blank">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a href="https://www.instagram.com/_charles_saurav/" target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href="https://github.com/charlesaurav13" target="_blank">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://twitter.com/Saurav21510033" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
