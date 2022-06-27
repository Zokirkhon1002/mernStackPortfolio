/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsInstagram, BsTelegram, BsGithub } from "react-icons/bs";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div id="footer_body" className="footer_body">
      <footer>
        <div className="footer_container">
          <div className="sec aboutus">
            <h2>About Me</h2>
            <p>
              My name is Zokirkhon and I'm 23 years old. I'm full-stack
              Developer
              <br />
              You can contact with me:
            </p>
            <ul className="sci">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Zokirkhan102"
                >
                  <FaFacebookF className="FaFacebookF" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Zokirkhan1"
                >
                  <AiOutlineTwitter className="AiOutlineTwitter" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/zokirkhan1002/"
                >
                  <BsInstagram className="BsInstagram" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/Zokirkhann1002"
                >
                  <BsTelegram className="BsTelegram" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/zokirkhon-kotibkhonov-2997b1202/"
                >
                  <AiFillLinkedin className="AiFillLinkedin" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Zokirkhon1002"
                >
                  <BsGithub className="BsGithub" />
                </a>
              </li>
            </ul>

            
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                {location.pathname === "/posts" ? (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </Link>
                ) : (
                  <Link to="/">Home</Link>
                )}
              </li>
              <li>
                {location.pathname === "/posts" ? (
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    Create a Post
                  </Link>
                ) : (
                  <Link to="/">Create a Post</Link>
                )}
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <div className="divForMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.3880717236757!2d127.70181811548854!3d34.77100458695686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356ddf424100e28b%3A0xc53f550b37e315af!2s703-6%20Mipyeong-dong%2C%20Yeosu%2C%20Jeollanam-do!5e0!3m2!1suz!2skr!4v1654487360293!5m2!1suz!2skr"
                className="info map"
                style={{ border: "none", margin: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ul className="info">
              <li>
                <span>
                  <BiMap />
                </span>
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://kko.to/Q9xZ98nBL"
                  >
                    전남 여수시 양지3길 6 301호.
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <BiPhoneCall />{" "}
                </span>
                <span>
                  <a href="tel:01080891816">+8210-8089-1816</a>
                </span>
              </li>
              <li>
                <span>
                  <AiOutlineMail />{" "}
                </span>
                <p>
                  <a href="mailto:zokirxonkotibxanov@gmail.com">
                    zokirxonkotibxanov@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>
          Copyright ©️ Zokirkhon {new Date().getFullYear() - 1}-
          {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
