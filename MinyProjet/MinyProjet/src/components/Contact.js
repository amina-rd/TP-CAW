import React, { useState } from "react";
import Formcontact from "./Formcontact";
import Listcontact from "./Listcontact";
import './contact.css';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [show, setShow] = useState(true);

  const addContact = (contact) => {
    const newContact = [contact, ...contacts];

    setContacts(newContact);
    console.log(...contacts);
  };
console.log(show)
  return (
    <div className='contact-app'>
      <h1>Contacts</h1>
      <h2>
        <button onClick={() => setShow(true)} className="contact-button"> Display</button> Or{" "}
        <button onClick={() => setShow(false)} className="contact-button"> Create Contact</button>
      </h2>

      {show === true ? <Listcontact contacts={contacts} /> : <Formcontact onSubmit={addContact} />}
    </div>
    
  );

}

export default Contact;
