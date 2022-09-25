import React from "react";

// ImageMaps credits to Qiuziz, @ https://github.com/qiuziz/react-image-map
import { ImageMap } from "@qiuz/react-image-map";

import PartyStore from "../assets/images/PSR.jpg";
import "../styles/global.css";

const mapArea = [
  {
    width: "2.2%",
    height: "12.6%",
    left: "34.1%",
    top: "57.5%",
    onMouseOver: () => console.log("Team"),
    url: "/team",
    className: "teamLink",
  },
  {
    width: "7.2%",
    height: "55%",
    left: "29%",
    top: "38%",
    className: "teamArrow",
  },
  {
    width: "2.8%",
    height: "13.2%",
    left: "36.9%",
    top: "52%",
    onMouseOver: () => console.log("Media"),
    url: "/media",
    className: "mediaLink",
  },
  {
    width: "9%",
    height: "13%",
    left: "30.8%",
    top: "41%",
    className: "mediaArrow",
  },
  {
    width: "4.4%",
    height: "16.5%",
    left: "40.7%",
    top: "57.5%",
    onMouseOver: () => console.log("Partners"),
    url: "/partners",
    className: "partnersLink",
  },
  {
    width: "16%",
    height: "12.6%",
    left: "28%",
    top: "78%",
    className: "partnersArrow",
  },
  {
    width: "1.6%",
    height: "11.1%",
    left: "47.1%",
    top: "64.9%",
    onMouseOver: () => console.log("Events"),
    url: "/events",
    className: "eventsLink",
  },
  {
    width: "9%",
    height: "12.6%",
    left: "40%",
    top: "80.5%",
    className: "eventsArrow",
  },
  {
    width: "3.1%",
    height: "19.3%",
    left: "49.6%",
    top: "62.5%",
    onMouseOver: () => console.log("Shop"),
    url: "/shop",
    className: "shopLink",
  },
  {
    width: "9%",
    height: "14%",
    left: "43.7%",
    top: "52%",
    className: "shopArrow",
  },
  {
    width: "7.8%",
    height: "15.5%",
    left: "55.1%",
    top: "58.5%",
    onMouseOver: () => console.log("About"),
    url: "/about",
    className: "aboutLink",
  },
  {
    width: "7.2%",
    height: "37%",
    left: "60.5%",
    top: "28.9%",
    className: "aboutArrow",
  },
  {
    width: "1.7%",
    height: "4.5%",
    left: "63.5%",
    top: "61.1%",
    onMouseOver: () => console.log("Contact"),
    url: "/contact",
    className: "contactLink",
  },
  {
    width: "9%",
    height: "12.6%",
    left: "64%",
    top: "67%",
    className: "contactArrow",
  },
  {
    width: "2.2%",
    height: "7.8%",
    left: "63.9%",
    top: "72.6%",
    onMouseOver: () => console.log("Impressum"),
    url: "/impressum",
    className: "impressumLink",
  },
  {
    width: "7.2%",
    height: "12.6%",
    left: "67%",
    top: "68.6%",
    className: "impressumArrow",
  },
];

function imageMap_click(area, index) {
  console.log("imageMap_click");

  console.log("area", area);
  console.log("index", index);

  window.location = area.url;
}

const Home = () => {
  return (
    <div className="home">
      <ImageMap
        className="usage-map"
        src={PartyStore}
        map={mapArea}
        onMapClick={imageMap_click}
        style={{ height: "530px", width: "40%", margin: "1rem" }}
      />
    </div>
  );
};

export default Home;
