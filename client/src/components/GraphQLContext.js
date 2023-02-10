import { createContext, useState, useContext } from "react";

export const GraphQLContext = createContext();

export const GraphQLContextProvider = (props) => {
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
    token: "",
    productId: "",
    shoppingCart: [],
  });

  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 15:20 ////////////
  // GraphQLHandler
  // 0. CreateUser
  // 1. LoginUser
  // 2. shoppingCard
  //
  //
  //
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const GraphQLHandler = async (request, userData) => {
    console.log("prio", userData.shoppingCart);
    const requestList = [
      `mutation {
  createUser(userInput: {email: "${userData.email}", firstName: "${userData.firstName}", country: "${userData.country}", password:"${userData.password}", lastName:"${userData.lastName}", city:"${userData.city}", street:"${userData.street}", streetNumber:"${userData.streetNumber}"  , zipCode:"${userData.zipCode}" ,shoppingCart:"${userData.shoppingCart}"})

  {
    token
    shoppingCart
}}
`,
      `{
        login(email: "${userData.email}", password: "${userData.password}"){
          token
          userId
        }
      }
`,
      `mutation {
        shoppingCart(token: "${localStorage.getItem("token")}",shoppingCart:"${
        userData.shoppingCart
      }"){
          shoppingCart
        }
      }
`,
    ];
    console.log(requestList[request]);
    const graphglQuery = {
      query: requestList[request],
    };
    await fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(graphglQuery),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (request === 0) {
          localStorage.setItem("token", resData.data.createUser.token);
          console.log(resData);
          setUserData({
            ...userData,
            shoppingCart: resData.data.createUser.shoppingCart,
          });
        }
        if (request === 2) {
          setUserData({
            ...userData,
            shoppingCart: resData.data.shoppingCart.shoppingCart[0].split(","),
          });
        }
      });
  };

  return (
    <GraphQLContext.Provider value={{ GraphQLHandler, userData, setUserData }}>
      {props.children}
    </GraphQLContext.Provider>
  );
};
