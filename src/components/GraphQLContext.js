import { createContext, useState } from "react";

export const GraphQLContext = createContext();

export const GraphQLContextProvider = (props) => {
  let returnData = [];

  /////////////////////////////////////Sven's//Coding/ Date: 22-11-2022 15:20 ////////////
  // personalData is grouped as:
  // 0. firstname
  // 1. country
  //
  //
  //
  //
  /////////////////////////////////////////gnidoC//s'nevS////////////////////////////////

  const GraphQLHandler = async (request, userData) => {
    console.log(userData[1]);
    const requestList = [
      `mutation {
  createUser(userInput: {email: "${userData.email}", firstName: "${userData.firstName}", country: "${userData.country}", password:"${userData.password}" })
  
  {
    _id
    email
    name
  }}
`,
      `{
        login(email: "${userData.email}", password: "${userData.password}"){
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
    <GraphQLContext.Provider value={{ GraphQLHandler }}>
      {props.children}
    </GraphQLContext.Provider>
  );
};
