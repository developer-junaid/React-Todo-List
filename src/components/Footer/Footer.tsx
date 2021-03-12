import React from "react";
import classes from "./footer.module.css";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.footer}>
        <h3>
          Developer <span>Junaid</span>
        </h3>
        <div className={classes.icons}>
          <a href="https://github.com/developer-junaid">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/JunaidQureshi6/">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/developer-junaid/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
