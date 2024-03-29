import React, { useContext, useEffect } from "react";
import { GraphQLContext } from "../components/GraphQLContext";

// ImageMaps credits to Qiuziz, @ https://github.com/qiuziz/react-image-map
import { ImageMap } from "@qiuz/react-image-map";

import PartyStore from "../assets/images/PSR.jpg";
import "../styles/global.css";

const mapArea = [
  {
    width: "4.6%",
    height: "12.6%",
    left: "11.1%",
    top: "60.5%",
    onMouseOver: () => console.log("Team"),
    url: "/team",
    className: "teamLink",
  },
  {
    width: "13.4%",
    height: "5%",
    left: "-3.1%",
    top: "64%",
    url: "/team",
    className: "teamArrow",
  },
  {
    width: "6%",
    height: "13.2%",
    left: "17.9%",
    top: "55.5%",
    onMouseOver: () => console.log("Media"),
    url: "/media",
    className: "mediaLink",
  },
  {
    width: "15%",
    height: "5%",
    left: "7%",
    top: "45.5%",
    url: "/media",
    className: "mediaArrow",
  },
  {
    width: "8.4%",
    height: "16.5%",
    left: "28.5%",
    top: "60.8%",
    onMouseOver: () => console.log("Partners"),
    url: "/partners",
    className: "partnersLink",
  },
  {
    width: "19%",
    height: "5%",
    left: "13.5%",
    top: "78.5%",
    url: "/partners",
    className: "partnersArrow",
  },
  {
    width: "3%",
    height: "10.5%",
    left: "43.5%",
    top: "68.9%",
    onMouseOver: () => console.log("Events"),
    url: "/events",
    className: "eventsLink",
  },
  {
    width: "13%",
    height: "5%",
    left: "33.3%",
    top: "81.5%",
    url: "/events",
    className: "eventsArrow",
  },
  {
    width: "7.3%",
    height: "18%",
    left: "49.2%",
    top: "66.5%",
    onMouseOver: () => console.log("Shop"),
    url: "/shop",
    className: "shopLink",
  },
  {
    width: "13%",
    height: "6%",
    left: "42%",
    top: "59.5%",
    url: "/shop",
    className: "shopArrow",
  },
  {
    width: "19.5%",
    height: "15%",
    left: "63.1%",
    top: "61.5%",
    onMouseOver: () => console.log("About"),
    url: "/about",
    className: "aboutLink",
  },
  {
    width: "15.2%",
    height: "8%",
    left: "68.3%",
    top: "55.9%",
    url: "/about",
    className: "aboutArrow",
  },
  {
    width: "4.7%",
    height: "2.5%",
    left: "83.5%",
    top: "66.1%",
    onMouseOver: () => console.log("Contact"),
    url: "/contact",
    className: "contactLink",
  },
  {
    width: "19%",
    height: "6.1%",
    left: "88.7%",
    top: "65.5%",
    url: "/contact",
    className: "contactArrow",
  },
  {
    width: "5%",
    height: "7.8%",
    left: "84.9%",
    top: "76.6%",
    onMouseOver: () => console.log("Impressum"),
    url: "/impressum",
    className: "impressumLink",
  },
  {
    width: "23%",
    height: "7.6%",
    left: "86.3%",
    top: "84.3%",
    url: "/impressum",
    className: "impressumArrow",
  },
];

function onMouseOver(argument) {
  argument.target.classList.add("active");
}

function onMouseLeave(argument) {
  if (argument.relatedTarget.classList.contains("image-map__content")) {
    argument.target.classList.remove("active");
  }
}

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
        style={{ height: "90vh", marginTop: "3rem" }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
};

export default Home;
