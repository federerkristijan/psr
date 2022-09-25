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
    className: "teamImageMap",
  },
  {
    width: "12.2%",
    height: "12.6%",
    left: "20%",
    top: "40%",
    onMouseOver: () => console.log("Arrow"),
    className: "arrow",
    title: "U+21B4"
  },
  {
    width: "2.8%",
    height: "13.2%",
    left: "36.9%",
    top: "52%",
    onMouseOver: () => console.log("Media"),
    url: "/media",
    className: "mediaImageMap",
  },
  {
    width: "4.4%",
    height: "16.5%",
    left: "40.7%",
    top: "57.5%",
    onMouseOver: () => console.log("Partners"),
    url: "/partners",
    className: "partnersImageMap",
  },
  {
    width: "1.6%",
    height: "11.1%",
    left: "47.1%",
    top: "64.9%",
    onMouseOver: () => console.log("Events"),
    url: "/events",
    className: "eventsImageMap",
  },
  {
    width: "3.1%",
    height: "19.3%",
    left: "49.6%",
    top: "62.5%",
    onMouseOver: () => console.log("Shop"),
    url: "/shop",
    className: "shopImageMap",
  },
  {
    width: "7.8%",
    height: "15.5%",
    left: "55.1%",
    top: "58.5%",
    onMouseOver: () => console.log("About"),
    url: "/about",
    className: "aboutImageMap",
  },
  {
    width: "1.7%",
    height: "4.5%",
    left: "63.5%",
    top: "61.1%",
    onMouseOver: () => console.log("Contact"),
    url: "/contact",
    className: "contactImageMap",
  },
  {
    width: "2.2%",
    height: "7.8%",
    left: "63.9%",
    top: "72.6%",
    onMouseOver: () => console.log("Impressum"),
    url: "/impressum",
    className: "impressumImageMap",
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
