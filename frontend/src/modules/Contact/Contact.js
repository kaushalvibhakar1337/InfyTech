import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header title="CONTACT US" />
      <div className="contact">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.90088190376!2d72.81552341485734!3d21.196096085907918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e62e7128bb3%3A0x95b25311d0d9496c!2sSurat%20Castle!5e0!3m2!1sen!2sin!4v1680440155013!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Embedded Map"
        ></iframe>
        <div className="contactForm">
          <form action="https://formspree.io/f/xrgvyykn" method="POST">
            <p className="heading">SHARE YOUR FEEDBACK</p>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />
            <textarea
              placeholder="Message"
              name="Message"
              cols="30"
              rows="10"
              autoComplete="off"
              required
            ></textarea>
            <button className="submit" type="submit" value="send">
              SEND
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
