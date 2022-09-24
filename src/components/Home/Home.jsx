import React from "react";

// ImageMaps credits to Qiuziz, @ https://github.com/qiuziz/react-image-map
import { ImageMap } from "@qiuz/react-image-map";

import PartyStore from "../../assets/images/PSR.jpg";
import "../../App.css";

const mapArea = [
  {
    width: "3.1%",
    height: "12.1%",
    left: "27.3%",
    top: "56.3%",
    onMouseOver: () => console.log('Team'),
    url: "/team",
    className: "teamImageMap"
  },
  {
    width: "3.5%",
    height: "13.2%",
    left: "31.4%",
    top: "51%",
    onMouseOver: () => console.log('Media'),
    url: "/media",
    className: "mediaImageMap"
  },
  {
    width: "5.7%",
    height: "14.3%",
    left: "36.6%",
    top: "56.5%",
    onMouseOver: () => console.log('Partners'),
    url: "/partners",
    className: "partnersImageMap"
  },
  {
    width: "1.6%",
    height: "10.1%",
    left: "45.5%",
    top: "63.9%",
    onMouseOver: () => console.log('Events'),
    url: "/events",
    className: "eventsImageMap"
  },
  {
    width: "4.1%",
    height: "18.3%",
    left: "48.6%",
    top: "61.5%",
    onMouseOver: () => console.log('Shop'),
    url: "/shop",
    className: "shopImageMap"
  },
  {
    width: "10.8%",
    height: "15.4%",
    left: "56.4%",
    top: "57.2%",
    onMouseOver: () => console.log('About'),
    url: "/about",
    className: "aboutImageMap"
  },
  {
    width: "2.3%",
    height: "3.2%",
    left: "68.1%",
    top: "61.1%",
    onMouseOver: () => console.log('Contact'),
    url: "/contact",
    className: "contactImageMap"
  },
  {
    width: "2.7%",
    height: "6.9%",
    left: "68.7%",
    top: "72.1%",
    onMouseOver: () => console.log('Impressum'),
    url: "/impressum",
    className: "impressumImageMap"
  },
];

  function imageMap_click(area, index) {
    console.log("imageMap_click")

    console.log("area", area)
    console.log("index", index)

    window.location = area.url;
  }

const Home = () => {

  return (
    <div className="Home">
      <ImageMap className="usage-map" src={PartyStore} map={mapArea}
      onMapClick={imageMap_click} style={{ height: "520px", width: "40%" }}
      />
    </div>
  );
};

export default Home;
