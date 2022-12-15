import { createContext, useState } from "react";

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
    console.log(userData[1]);
    const requestList = [
      `mutation {
  createUser(userInput: {email: "${userData.email}", firstName: "${userData.firstName}", country: "${userData.country}", password:"${userData.password}", lastName:"${userData.lastName}", city:"${userData.city}", street:"${userData.street}", streetNumber:"${userData.streetNumber}"  , zipCode:"${userData.zipCode}"    })

  {
    _id
    email

  }}
`,
      `{
        login(email: "${userData.email}", password: "${userData.password}"){
          token
          userId
        }
      }
`,
      `{
        shoppingCard(token: "${userData.token}", productId: "${userData.productId}", userId: "${userData.productId}"){
          token
          userId
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
      .then((resData) => console.log(resData));
  };

  

  return (
    <GraphQLContext.Provider value={{ GraphQLHandler, userData, setUserData }}>
      {props.children}
    </GraphQLContext.Provider>
  );
};
