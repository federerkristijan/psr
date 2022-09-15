import React, { useEffect, useState } from 'react';
import sanityClient from "../../lib/client";

import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contact"]{
        address,
        email
        }`
      )
      .then((data) => setContact(data))
      .catch(console.error);
  }, []);

  return (
    <div className='contact'>
      {contact && contact.map((item) => (
      <div className="contact-data">
      <div className="contact-address">
        <span>{item.address}</span>
      </div>
      <div className="contact-email">
        <span>{item.email}</span>
      </div>
      </div>
      ))}
    </div>
  )
}

export default Contact
