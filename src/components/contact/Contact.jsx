import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tugmbzc",
        "template_76nlgem",
        form.current,
        "2qLIes9jFvj4_E0q7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 data-aos="zoom-out-up" data-aos-duration="1000">
        Get In Touch
      </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shraniksangat@gmail.com</h5>
            <a href="mailto:shraniksangat9@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Shra Nik</h5>
            <a href="https://m.me/shranik.sangat.5/" target="__blank">
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+977-9842478862</h5>
            <a
              href="https://api.whatsapp.com/send?phone+9779842478862"
              target="__blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
