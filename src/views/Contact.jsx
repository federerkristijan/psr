import React, { useEffect, useState, useContext } from "react";
import sanityClient from "../lib/client";
import { GraphQLContext } from "../components/GraphQLContext";

import "../styles/global.css";
import Back from "../components/Back";

const Contact = () => {
  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Sign up
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const [contact, setContact] = useState(null);
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [text, setText] = useState({});

  const { GraphQLHandler } = useContext(GraphQLContext);

  const textInputHandler = (e) => {
    setText({ ...text, [e.target.id]: e.target.value });
    console.log(text);
  };

  const countryHandler = (event) => {
    setCountry(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const firstNameHandler = (event) => {
    setfirstName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const signupHandler = () => {
    GraphQLHandler(0, email, password, [firstName, country]);
  };

  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Login
  // first value of GraphQLHandler is number of graphqlquery, see graphQLcontext
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const loginHandler = () => {
    GraphQLHandler(1, email, firstName, password);
  };

  const loginPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginEmailHandler = (event) => {
    setEmail(event.target.value);
  };

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
    <div className="contact">
      <div>
        <button onClick={signupHandler}>Signup</button>
        firstName:
        <input onChange={firstNameHandler} />
        email: <input onChange={emailHandler} /> password:{" "}
        <input onChange={passwordHandler} />
        country:
        <input onChange={countryHandler} />
        {/* lastName:
        <input onChange={lastNameHandler} />
        
        city:
        <input onChange={cityHandler} />
        street:
        <input onChange={streetHandler} />
        streetNumber:
        <input onChange={streetNumberHandler} />
        ZipCode:
        <input onChange={zipCodeHandler} /> */}
      </div>
      <hr
        style={{
          background: "lime",
          color: "lime",
          borderColor: "lime",
          height: "3px",
        }}
      />
      <div>
        <button onClick={loginHandler}>Login</button>
        email:
        <input onChange={loginEmailHandler} />
        password: <input onChange={loginPasswordHandler} />
      </div>
      <hr
        style={{
          background: "lime",
          color: "lime",
          borderColor: "lime",
          height: "3px",
        }}
      />
      ;
      <Back />
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
