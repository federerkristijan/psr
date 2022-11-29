import React, { useEffect, useState, useContext } from "react";
import sanityClient from "../lib/client";
import { GraphQLContext } from "../components/GraphQLContext";

import "../styles/global.css";
import Back from "../components/Back";

const Contact = () => {
  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Sign up
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const [contact, setContact] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    password: "",
    email: "",
    country: "",
    lastName: "",
    city: "",
    street: "",
    streetNumber: "",
    zipCode: "",
    loginPassword: "",
    loginEmail: "",
  });

  const { GraphQLHandler } = useContext(GraphQLContext);

  const textInputHandler = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
    console.log(userData);
  };

  const signupHandler = () => {
    GraphQLHandler(0, userData);
  };

  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Login
  // first value of GraphQLHandler is number of graphqlquery, see graphQLcontext
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const loginHandler = () => {
    GraphQLHandler(1, userData);
  };

  const loginPasswordHandler = (event) => {};

  const loginEmailHandler = (event) => {};

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
        Sign up
        <button key={Math.random()} id="singUp" onClick={signupHandler}>
          {" "}
          Sign up
        </button>
        firstName:
        <input key={"firs"} id="firstName" onChange={textInputHandler} />
        password:
        <input key={"pass"} id="password" onChange={textInputHandler} />
        email:
        <input key={"emai"} id="email" onChange={textInputHandler} />
        country:
        <input key={"coun"} id="country" onChange={textInputHandler} />
        lastName:
        <input key={"last"} id="lastName" onChange={textInputHandler} />
        city:
        <input key={"city"} id="city" onChange={textInputHandler} />
        street:
        <input key={"sore"} id="street" onChange={textInputHandler} />
        streetNumber:
        <input key={"stre"} id="streetNumber" onChange={textInputHandler} />
        ZipCode:
        <input key={"zipC"} id="zipCode" onChange={textInputHandler} />
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
        <input key={"lohi"} id="loginEmail" onChange={loginEmailHandler} />
        password:{" "}
        <input
          key={"logi"}
          id="loginPassword"
          onChange={loginPasswordHandler}
        />
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
