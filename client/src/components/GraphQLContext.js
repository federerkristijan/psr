import { createContext, useState, useContext, useEffect } from "react";

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

  useEffect(() => {
    if (props.dataLoaded === "request") {
      GraphQLHandler(1, userData);
      //temporary to repvent loop
      props.setDataLoaded(true);
    }
  }, [props.dataLoaded, userData]);

  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 15:20 ////////////
  // GraphQLHandler
  // 0. CreateUser
  // 1. LoginUser, this can be by token or by user name
  // 2. shoppingCard
  //
  //
  //
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const GraphQLHandler = async (request, GraphQLUserData) => {
    const requestList = [
      `mutation {
  createUser(userInput: {email: "${GraphQLUserData.email}", firstName: "${GraphQLUserData.firstName}", country: "${GraphQLUserData.country}", password:"${GraphQLUserData.password}", lastName:"${GraphQLUserData.lastName}", city:"${GraphQLUserData.city}", street:"${GraphQLUserData.street}", streetNumber:"${GraphQLUserData.streetNumber}"  , zipCode:"${GraphQLUserData.zipCode}" ,shoppingCart:"${GraphQLUserData.shoppingCart}"})

  {
    token
    shoppingCart
}}
`,
      `{
        login(email: "${GraphQLUserData.email}", password: "${
        GraphQLUserData.password
      }", token: "${localStorage.getItem("token")}"){
          token
          userId
          shoppingCart
        }
      }
`,
      `mutation {
        shoppingCart(token: "${localStorage.getItem("token")}",shoppingCart:"${
        GraphQLUserData.shoppingCart
      }"){
          shoppingCart
        }
      }
`,
    ];

    const graphqlQuery = {
      query: requestList[request],
    };
    await fetch("http://localhost:8080/graphql/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (request === 0) {
          localStorage.setItem("token", resData.data.createUser.token);

          setUserData({
            ...userData,
            shoppingCart: resData.data.createUser.shoppingCart,
          });
        }
        if (request === 1) {
          setUserData({
            ...userData,
            shoppingCart: Boolean(resData.data.login.shoppingCart[0])
              ? resData.data.login.shoppingCart[0].split(",")
              : [],
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
