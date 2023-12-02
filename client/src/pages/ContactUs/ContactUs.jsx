import React from "react";
import "./ContactUs.css";

import { useState } from "react";

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form>
        <h1>
          Contact <span>Us</span>
        </h1>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
          placeholder="Enter your Name"
        />
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          value={data.email}
          placeholder="example@gmail.com"
        />
        <input
          type="phone"
          name="phone"
          id=""
          onChange={handleChange}
          value={data.phone}
          placeholder="+91"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={handleChange}
          value={data.message}
          placeholder="type here..."
        />

        <button type="submit" onClick={handleSubmit}>
          Send
        </button>

        {data.name !== "" && (
          <p>Thank you {data.name} for filling this form!!</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
