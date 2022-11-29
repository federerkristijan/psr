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

  const GraphQLHandler = async (request, email, password, personalData) => {
    console.log(personalData[1]);
    const requestList = [
      `mutation {
  createUser(userInput: {email: "${email}", name: "${personalData[0]}", country: "${personalData[1]}", password:"${password}" })
  
  {
    _id
    email
    name
  }}
`,
      `{
        login(email: "${email}", password: "${password}"){
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
