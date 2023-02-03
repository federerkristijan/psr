import React, { useEffect, useState } from "react";
import sanityClient from "../lib/client";

import "../styles/global.css";

const Contact = () => {
  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Sign up
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const [contact, setContact] = useState("");

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
    <div>
      {contact &&
        contact.map((item) => (
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
  );
};

export default Contact;
