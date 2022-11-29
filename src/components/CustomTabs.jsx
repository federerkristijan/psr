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
          {activeTab === "lp" ? <LP /> : <Digital />}
        </div>
      </div>
    </div>
  );
};

export default CustomTabs;
