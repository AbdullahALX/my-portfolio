import React from 'react';
import '../Contact/Contact.css';
import { Link } from 'react-scroll';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_l67hd63',
        'template_28ne2pp',
        form.current,
        'ZspUQj4J45E9DYPzZ'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div className="contactMe">
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactText">
          Feel free to fill out the form below to discuss job opportunities
        </span>
        <form
          action=""
          className="conatactForm"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="text"
            className="email"
            placeholder="email"
            name="from_email"
          />
          <textarea
            name="message"
            id="msg"
            rows="5"
            className="msgText"
            placeholder="Your message"
          />
          <button className="sendContactForm" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
