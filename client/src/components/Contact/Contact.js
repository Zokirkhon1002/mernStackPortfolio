import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import "./styles.css";
import emailjs from "emailjs-com";
  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqhxfp3",
        "template_9a8vjiq",
        e.target,
        process.env.REACT_APP_PUBLIC
      )
      .then((res) => {
        alert(
          "Your Message successfully sent, We will reply as much as earlier. status: "+res.status
        );
        setFormData({name: "",email: "",subject: "",message: "",});
        window.scrollTo(0,0)
      })
      .catch((err) => {
        alert(
          "Your message did not send! error: "+err
        );
      });
  };

  return (
    <div className="contact_body">
      <section className="contact_main">
        <div className="contact_content">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            quibusdam aut repudiandae nihil quas. Molestias, nostrum alias
            repellat cumque nam minus architecto perspiciatis ea nesciunt
            tempore ut? Porro, ducimus itaque?
          </p>
        </div>
        <div className="contact_container">
          <div className="contact_info">
            <div className="contact_info_box">
              <div className="contact_info_box_icon">
                <BiMap className="iconContact" />
              </div>
              <div className="contact_info_box_text">
                <h2>Address</h2>
                <p>
                  <a target="_blank" rel="noreferrer" href="http://kko.to/NLtBiO4yT">
                    전남 여수시 미평동 700-4 301호. (만성로95)
                  </a>
                </p>
              </div>
            </div>
            <div className="contact_info_box">
              <div className="contact_info_box_icon">
                <BiPhoneCall className="iconContact" />
              </div>
              <div className="contact_info_box_text">
                <h2>Phone</h2>
                <p>
                  <a href="tel:01080891816">+8210-8089-1816</a>
                </p>
              </div>
            </div>
            <div className="contact_info_box">
              <div className="contact_info_box_icon">
                <AiOutlineMail className="iconContact" />
              </div>
              <div className="contact_info_box_text">
                <h2>Email</h2>
                <p>
                  <a
                    style={{ wordBreak: "break-word" }}
                    href="mailto:zokirxonkotibxanov@gmail.com"
                  >
                    zokirxonkotibxanov@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="contact_input_box">
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  name="name"
                  required="required"
                />
                <span>Full Name</span>
              </div>
              <div className="contact_input_box">
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="contact_input_box">
                <input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  type="text"
                  name="subject"
                  required="required"
                />
                <span>Subject</span>
              </div>
              <div className="contact_input_box">
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  name="message"
                  required="required"
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="contact_input_box">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
