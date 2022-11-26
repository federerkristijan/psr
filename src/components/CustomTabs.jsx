import React, { useState } from "react";
import Digital from "./Digital";
import LP from "./LP";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("lp");

  const handleLP = () => {
    setActiveTab("lp");
  };

  const handleDigital = () => {
    setActiveTab("digital");
  };

  return (
    <div className="Tabs-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div
        className="Tabs"
        style={{
          width: "60%",
          height: "auto",
          background: "lightgrey",
          borderRadius: "1rem",
        }}
      >
        {/* tabs nav */}
        <ul className="Nav" style={{ listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid blue" }}>
          <li style={{ width:"30%", border: "1px solid red" }} className={activeTab === "lp" ? "active" : ""} onClick={handleLP}>
            LP
          </li>
          <li
            style={{ width:"30%", border: "1px solid red" }} className={activeTab === "digital" ? "active" : ""}
            onClick={handleDigital}
          >
            Digital
          </li>
        </ul>
        {/* tabs panel/outlet */}
        <div className="outlet">
          {/* content comes here */}
          {activeTab === "lp" ? <LP/> : <Digital/>}
        </div>
      </div>
    </div>
  );
};

export default CustomTabs;
