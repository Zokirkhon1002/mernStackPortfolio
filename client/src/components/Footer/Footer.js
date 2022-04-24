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

const Footer = () => {
  return (
    <div id="footer_body" className="footer_body">
      <footer>
        <div className="footer_container">
          <div className="sec aboutus">
            <h2>About Me</h2>
            <p>
              My name is Zokirkhon and I'm 23 years old. I've learned html, css,
              sass, bootstrap, JavaScript, ReactJS, Redux toolkit, NodeJs and
              Python. Currenly I'm doing some practices with MERN Stack. I
              didn't stop to learn, now I'm learning Nodejs in advanced level
              and Algorithms && Data structures
            </p>
            <ul className="sci">
              <li>
                <a target="_blank" href="https://www.facebook.com/Zokirkhan102">
                  <FaFacebookF className="FaFacebookF" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/Zokirkhan1">
                  <AiOutlineTwitter className="AiOutlineTwitter" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/zokirkhan1002/"
                >
                  <BsInstagram className="BsInstagram" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/Zokirkhann1002">
                  <BsTelegram className="BsTelegram" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/zokirkhon-kotibkhonov-2997b1202/"
                >
                  <AiFillLinkedin className="AiFillLinkedin" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/Zokirkhon1002">
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Create a Post</a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.3456064315019!2d127.70578671713633!3d34.77114675684713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356ddf43a724f847%3A0xdd499ca2846a04cd!2zKOycoO2VnCnssq3shpTqsbTquLA!5e0!3m2!1suz!2skr!4v1650685608704!5m2!1suz!2skr"
              className="info map"
              style={{border: 'none', margin: '10px'}}
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
                <span><a target="_blank" href="http://kko.to/NLtBiO4yT">전남 여수시 미평동 700-4 301호. (만성로95)</a></span>
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
