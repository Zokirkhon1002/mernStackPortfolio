import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import "./styles.css";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
        toast.success("Your Message successfully sent.", { icon: "✅" });
        setTimeout(() => {
          toast.info("Zokikhon will reply as much as earlier.", { icon: "🚀" });
        }, 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
        window.scrollTo(0, 0);
      })
      .catch(() => {
        toast.error("Your message did not send!", { icon: "🚫" });
        toast.info("We will fix some bugs as much as earlier.", { icon: "🚀" });
      });
  };

  document.title = "Contact";
  return (
    <div className="contact_body">
      <ToastContainer />
      <section className="contact_main">
        <div className="contact_content">
          <h2>Contact Us</h2>
          <p>
            You can send your messages with below the form.
            <br />
            We will reply as much as earlier.
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://kko.to/Q9xZ98nBL"
                  >
                    전남 여수시 양지3길 6 301호.
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
