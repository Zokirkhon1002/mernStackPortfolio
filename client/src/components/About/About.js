/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./styles.css";
import me from "../../images/me.png";
import { FaTableTennis, FaBook, FaBasketballBall } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import Zokirkhon_Kotibkhonov from "../../cv/Zokirkhon_Kotibkhonov.pdf";

const About = () => {
  const handleclickDownloadCV = () => {
    window.open(Zokirkhon_Kotibkhonov)
  }
  return (
    <div className="about_body">
      {/* <h1>About page is coming soon...(MY CV)</h1> */}

      <div className="container_about">
        <div className="left_Side_about">
          <div className="profileText">
            <div className="imgBx">
              <a href={me} target="_blank" rel="noreferrer">
                <img src={me} alt="Zokirkhon's photo" />
              </a>
            </div>
            <h2>
              Kotibkhonov Zokirkhon Zokhidkhon Ugli
              <br />
              <span>Web Developer</span>
            </h2>
          </div>
          <div className="contactInfo_about">
            <h3 className="title_about">Contact Info</h3>
            <ul>
              <li>
                <span className="icon_about">
                  <BiPhoneCall />
                </span>
                <span className="text_about">
                  <a href="tel:01080891816">+8210-8089-1816</a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <AiOutlineMail />
                </span>
                <span className="text_about">
                  <a href="mailto:zokirxonkotibxanov@gmail.com">
                    zokirxonkotibxanov@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <SiRedux />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://zokirkhon.uz/posts"
                  >
                    Zokirkhon.uz
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <BsGithub />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Zokirkhon1002"
                  >
                    Zokirkhon1002
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <AiFillLinkedin />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/zokirkhon-kotibkhonov-2997b1202/"
                  >
                    Zokirkhon-Kotibkhonov
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <BsTelegram />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/Zokirkhann1002"
                  >
                    Zokirkhann1002
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <AiOutlineTwitter />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/Zokirkhan1"
                  >
                    Zokirkhan1
                  </a>
                </span>
              </li>
              <li>
                <span className="icon_about">
                  <BiMap />
                </span>
                <span className="text_about">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://kko.to/Q9xZ98nBL"
                  >
                    Yeosu, South Korea
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="contactInfo_about education">
            <h3 className="title_about">Education</h3>
            <ul>
              <li>
                <h5>2018 - Presenet</h5>
                <h4>
                  Bachelor Degree in International Trade and Computer Software
                  Engineering
                </h4>
                <h4>Chonnam National University</h4>
              </li>
              <li>
                <h5>2014-2017</h5>
                <h4>High School in Basic Knowledge of Computer and English</h4>
                <h4>Academic Lyceum of NamTI</h4>
              </li>
              <li>
                <h5>2012-2014</h5>
                <h4>
                  Middle School in English Language and Literature, General
                </h4>
                <h4>Specialized school Number 66</h4>
              </li>
            </ul>
          </div>
          <div className="contactInfo_about language">
            <h3 className="title_about">Languages</h3>
            <ul>
              <li>
                <span className="text_about">Uzbek</span>
                <span className="percent_about">
                  <div style={{ width: "100%" }}></div>
                </span>
              </li>
              <li>
                <span className="text_about">Turkish</span>
                <span className="percent_about">
                  <div style={{ width: "70%" }}></div>
                </span>
              </li>
              <li>
                <span className="text_about">English</span>
                <span className="percent_about">
                  <div style={{ width: "90%" }}></div>
                </span>
              </li>
              <li>
                <span className="text_about">Korean</span>
                <span className="percent_about">
                  <div style={{ width: "50%" }}></div>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="right_Side_about">
          <div className="about_about">
            <h2 className="title2_about">Profile</h2>
            <p>
              Self-motivated
              <br />
              Over a year hands-on learning and experience in IT field.
              <br />
              TECHNICAL PROFICIENCY: I participated projects and got some
              experience in Frontend and Backend.
              <br />
              <br />
              Like professional knowledge of technologies in html, css, sass,
              bootstrap, JavaScript, Redux toolkit, TypeScript, Python, MERN
              Stack (MongoDb, Express, React, NodeJs).
              <br />
              <br />
              Currenly I'm doing some practices with MERN Stack. I didn't stop
              to learn, now I'm learning Nodejs in advanced level and Algorithms
              && Data structures.
              <br />
              <br />I would like to start working as a Frontend Developer:)
            </p>
          </div>
          <div className="about_about">
            <h2>Experience</h2>
            <div className="box_about">
              <div className="year_company_about">
                <h5>2021-2022</h5>
                <h5>Chonnam National Univesity</h5>
              </div>
              <div className="text_about">
                <h4>Office Assistant</h4>
                <p>
                  - Helped teaching staff with basic office work in the main
                  department office of the faculty
                </p>
              </div>
            </div>

            <div className="box_about">
              <div className="year_company_about">
                <h5>2022-Presenet</h5>
                <h5>Freelancer</h5>
              </div>
              <div className="text_about">
                <h4>Strong Junior Frontend and Backend Web Developer</h4>
                <p>
                  I participated projects and got some experience in Frontend
                  and Backend, one of them is that:{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.learningskillslab.com"
                  >
                    LSL Education
                  </a>
                  <br />
                  We are working remotely with my Friends. I got experience
                  working with github. In this project I made creating-test at
                  Admin Dashboard, solving-test in user route in frontend and
                  backend. I had some problems with creating-test and solving
                  test cause there were 2 types of questions. <br />
                  1. Multiple Choice
                  <br />
                  2. Matching words
                  <br />
                  working with matching words is not easy I think so. However I
                  got results perfectly Alhamdulillah
                  <br />
                </p>
              </div>
            </div>

            <div className="box_about">
              <div className="year_company_about">
                <h5>2018-Presenet</h5>
                <h5>Chonnam National Univesity</h5>
              </div>
              <div className="text_about">
                <h4>Senior Student</h4>
                <p>
                  Student at Chonnam National University in International Trade
                  and Computer Software Engineering major
                </p>
              </div>
            </div>
          </div>
          <div className="about_about skills">
            <h2 className="title2_about">professional Skills</h2>
            <div className="box_about">
              <h4>Html</h4>
              <div className="percent_about">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>Css</h4>
              <div className="percent_about">
                <div style={{ width: "77%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>JavaScript</h4>
              <div className="percent_about">
                <div style={{ width: "98%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>React JS</h4>
              <div className="percent_about">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>Redux</h4>
              <div className="percent_about">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>NodeJS</h4>
              <div className="percent_about">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>Python</h4>
              <div className="percent_about">
                <div style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="box_about">
              <h4>MongoDB</h4>
              <div className="percent_about">
                <div style={{ width: "86%" }}></div>
              </div>
            </div>
          </div>

          <div className="about_about interest">
            <h2 className="title2_about">Interest</h2>
            <ul>
              <li>
                <span>
                  <FaTableTennis />
                </span>
                Table Tennis
              </li>
              <li>
                <span>
                  <FaBasketballBall />
                </span>
                Basketball
              </li>
              <li>
                <span>
                  <FaBook />
                </span>
                Reading
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btnBox">
        <a href={Zokirkhon_Kotibkhonov} download="Zokirkhon_Kotibkhonov.pdf" onClick={handleclickDownloadCV}>
          <button class="buttonForDownload" style={{ verticalAlign: "middle" }}>
            <span>Download </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
