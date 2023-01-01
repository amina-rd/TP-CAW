import React, { useState } from "react";
import Formblog from "./Formblog";
import Listblog from "./Listblog";
import './contact.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(true);

  const addBlog = (blog) => {
    const newBlogs = [blog, ...blogs];

    setBlogs(newBlogs);
    console.log(...blogs);
  };
console.log(show)
  return (
    <div className='contact-app'>
      <h1>Blog</h1>
      <h2>
        <button onClick={() => setShow(true)} className="contact-button"> List all post</button> Or{" "}
        <button onClick={() => setShow(false)} className="contact-button"> Create Post</button>
      </h2>

      {show === true ? <Listblog blogs={blogs} /> : <Formblog onSubmit={addBlog} />}
    </div>
    
  );

}

export default BlogList;
