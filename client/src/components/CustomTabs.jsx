import React, { useState, useContext } from "react";
import Digital from "./Digital";
import { GraphQLContext } from "./GraphQLContext";

const CustomTabs = (props) => {
  const { GraphQLHandler, userData, setUserData } = useContext(GraphQLContext);
  const [activeTab, setActiveTab] = useState("lp");

  const handleLP = (e) => {
    console.log(e.target.id);
    setActiveTab("lp");
    props.setOpenTab(["lp", props.id]);
  };

  const handleDigital = (e) => {
    console.log(e.target.id);
    setActiveTab("digital");
    console.log("props.id", props.id);
    props.setOpenTab(["digital", props.id]);
  };

  const handleAddCheckout = async (e) => {
    let temp = await userData.shoppingCart;

    if (localStorage.getItem("token")) {
      console.log(
        "temp:",
        temp,
        "e.target.id:",
        e.target.id,
        "userdata.shoppingcard",
        userData.shoppingCart
      );
      console.log(userData.shoppingCart);
      temp.push(e.target.id);
      console.log(temp);

      setTimeout(() => {
        console.log(temp);
      }, 500);

      GraphQLHandler(2, { ...userData, shoppingCart: temp });
    } else {
      temp = {
        ...userData,
        shoppingCart: [e.target.id],
      };

      GraphQLHandler(0, temp);
    }
  };

  return (
    <div className="custom-tabs">
      <div className="record-tabs">
        <div className="Tabs-wrapper">
          <div className="Tabs">
            {/* tabs nav */}
            <ul className="Nav">
              <li
                className={activeTab === "lp" ? "active" : ""}
                onClick={handleLP}
                key="lp"
              >
                LP
              </li>
              <li
                className={activeTab === "digital" ? "active" : ""}
                onClick={handleDigital}
                key="digital"
              >
                Digital
              </li>
            </ul>
            {/* tabs panel/outlet */}
            <div className="outlet">
              {/* content comes here */}
              {activeTab === "lp" ? "" : <Digital />}
            </div>
          </div>
        </div>
      </div>

      {activeTab === "lp" && (
        <button
          className="price"
          id={`LP-${props.item._id}`}
          cursor="crosshair"
          onClick={(e) => {
            handleAddCheckout(e);
          }}
        >
          {props.item.price}€
        </button>
      )}
    </div>
  );
};

export default CustomTabs;
