// Contact.jsx

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "./styles";
import EarthCanvas from "./Earth";
import SectionWrapper from "./SectionWrapper";
import { slideIn } from "./motion";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chandra Sai Teja Adhikarla",
          from_email: form.email,
          to_email: "chandrasaiteja0804@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="form-container"
      >
        <p className="section-subtext">Get in touch</p>
        <h3 className="section-headtext">Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <label className="form-label">
            <span className="label-text">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="input-field"
            />
          </label>
          <label className="form-label">
            <span className="label-text">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="input-field"
            />
          </label>
          <label className="form-label">
            <span className="label-text">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="textarea-field"
            />
          </label>

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="earth-container"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
