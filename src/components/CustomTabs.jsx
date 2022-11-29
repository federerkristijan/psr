import React, { useState } from "react";
import Digital from "./Digital";
import LP from "./LP";

const CustomTabs = (props) => {
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

  return (
    <div className="card-right">
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
              {activeTab === "lp" ? <LP /> : <Digital />}
            </div>
          </div>
        </div>
      </div>

      {activeTab === "lp" && <div className="price">{props.item.price}€</div>}
    </div>
  );
};

export default CustomTabs;
