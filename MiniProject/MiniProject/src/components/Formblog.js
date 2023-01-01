import React, { useState } from "react";

function BlogForm(props) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      subject: subject,
      description: description,
      date: date,
    });
    setSubject("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
        name="text"
        className="contact-input"
      />
      <br></br>
      <br></br>
      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        name="text"
        className="contact-input"
      />
      <br></br>
      <br></br>
      <input
        placeholder="Date"
        onChange={(e) => setDate(e.target.value)}
        name="date"
        className="contact-input"
      />
      <br></br>
      <br></br>

      <button onClick={handleSubmit} className="contact-button">
        Add new post
      </button>
    </form>
  );
}

export default BlogForm;
