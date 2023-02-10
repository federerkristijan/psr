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
    width: "13%",
    height: "6.6%",
    left: "31.5%",
    top: "76%",
    url: "/partners",
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
    width: "7.5%",
    height: "8.4%",
    left: "47.5%",
    top: "81.2%",
    url: "/events",
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
    width: "8%",
    height: "6%",
    left: "47%",
    top: "54.5%",
    url: "/shop",
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
    height: "8%",
    left: "56.3%",
    top: "46.9%",
    url: "/about",
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
    width: "11%",
    height: "6.1%",
    left: "65.8%",
    top: "61.7%",
    url: "/contact",
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
    width: "13%",
    height: "7.6%",
    left: "64.8%",
    top: "81.3%",
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
  const { GraphQLHandler } = useContext(GraphQLContext);

  //Check iftoken exists
  useEffect(() => {
    if (localStorage.getItem("token")) {
      GraphQLHandler(2);
      console.log("check if done");
    }
  }, []);

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
