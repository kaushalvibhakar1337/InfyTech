import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { UserAuth } from "../../context/AuthContext";
import useFetchUser from "../../hooks/useFetchUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.scss";

const Contact = () => {
  const { user } = UserAuth();
  const userData = useFetchUser(user?.uid);
  const fullName = userData?.FirstName + " " + userData?.LastName;

  const notify = () =>
    toast.success("YOUR FEEDBACK IS HIGHLY APPRECIATED!", {
      className: "toastify",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <>
      <Navbar />
      <Header title="CONTACT US" />
      <div className="contact">
        <div className="left">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.90088190376!2d72.81552341485734!3d21.196096085907918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e62e7128bb3%3A0x95b25311d0d9496c!2sSurat%20Castle!5e0!3m2!1sen!2sin!4v1680440155013!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Embedded Map"
          ></iframe>
        </div>
        <div className="right">
          <form
            action="https://formspree.io/f/xrgvyykn"
            method="POST"
            onSubmit={notify}
          >
            <p className="heading">
              GOT ANY ISSUES?
              <br />
              <br />
              FEEL FREE TO DROP US A MAIL.
            </p>
            {user?.uid ? (
              <input name="Username" value={fullName} readOnly />
            ) : (
              <input
                type="text"
                placeholder="Your Name"
                name="Username"
                autoComplete="off"
                required
              />
            )}
            {user?.uid ? (
              <input name="Email" value={user.email} readOnly />
            ) : (
              <input
                type="email"
                placeholder="Your Email Address"
                name="Email"
                autoComplete="off"
                required
              />
            )}
            <textarea
              placeholder="How Can We Help?"
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
