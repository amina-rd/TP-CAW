import React, { useState } from "react";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: name,
      telephone: tel,
      email: email,
    });
    setName("");
    setTel("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        name="text"
        className="contact-input"
      />
      <br></br>
      <br></br>
      <input
        placeholder="Phone number"
        onChange={(e) => setTel(e.target.value)}
        name="number"
        className="contact-input"
      />
      <br></br>
      <br></br>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="contact-input"
      />
      <br></br>
      <br></br>

      <button onClick={handleSubmit} className="contact-button">
        Add new contact
      </button>
    </form>
  );
}

export default ContactForm;
