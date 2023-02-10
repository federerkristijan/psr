import React, { useEffect, useState, useContext } from "react";
import sanityClient from "../lib/client";
import { GraphQLContext } from "../components/GraphQLContext";

import "../styles/global.css";

const SignUpLogin = () => {
  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 14:32 ////////////
  // Sign up
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const [contact, setContact] = useState("");

  const { GraphQLHandler, userData, setUserData } = useContext(GraphQLContext);

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
        <br />
        <br />
        firstName:
        <input key={"firs"} id="firstName" onChange={textInputHandler} />
        <br />
        <br />
        password:
        <input key={"pass"} id="password" onChange={textInputHandler} />
        <br />
        <br />
        email:
        <input key={"emai"} id="email" onChange={textInputHandler} />
        <br />
        <br />
        country:
        <input key={"coun"} id="country" onChange={textInputHandler} />
        <br />
        <br />
        lastName:
        <input key={"last"} id="lastName" onChange={textInputHandler} />
        <br />
        <br />
        city:
        <input key={"city"} id="city" onChange={textInputHandler} />
        <br />
        <br />
        street:
        <input key={"sore"} id="street" onChange={textInputHandler} />
        <br />
        <br />
        streetNumber:
        <input key={"stre"} id="streetNumber" onChange={textInputHandler} />
        <br />
        <br />
        zipCode:
        <input key={"zipC"} id="zipCode" onChange={textInputHandler} />
        <br />
        <br />
        Sign up
        <button key={Math.random()} id="singUp" onClick={signupHandler}>
          <br />
          <br /> Sign up
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          remove token
        </button>
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
        email:
        <input key={"lohi"} id="loginEmail" onChange={loginEmailHandler} />
        <br />
        <br />
        password:{" "}
        <input
          key={"logi"}
          id="loginPassword"
          onChange={loginPasswordHandler}
        />
        <br />
        <br />
        <button onClick={loginHandler}>Login</button>
        <br />
        <br />
      </div>
      <hr
        style={{
          background: "lime",
          color: "lime",
          borderColor: "lime",
          height: "3px",
        }}
      />
    </div>
  );
};

export default SignUpLogin;
