import React from "react";
import { ImageMap } from "@qiuz/react-image-map";

import PartyStore from "../../assets/images/PartyStore_Sadies.png";
import Team from "../Team/Team";
import Media from "../Media/Media";
import Partners from "../Partners/Partners";
import Events from "../Events/Events";
import Shop from "../Shop/Shop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Impressum from "../Impressum/Impressum";
import "./Home.css";

// const img = {PartyStore};

const mapArea = [
  {
    width: "6.102310231023096%",
    height: "13.320132013201318%",
    left: "11.716171617161717%",
    top: "55.97359735973597%",
    onMouseOver: () => console.log('Team')
  },
  {
    width: "6.102310231023096%",
    height: "14.805280528052803%",
    left: "18.976897689768975%",
    top: "51.02310231023102%",
    onMouseOver: () => console.log('Media')
  },
  {
    width: "8.082508250825077%",
    height: "14.805280528052803%",
    left: "28.382838283828388%",
    top: "57.95379537953795%",
    onMouseOver: () => console.log('Partners')
  },
  {
    width: "4.287128712871279%",
    height: "11.009900990099007%",
    left: "42.079207920792086%",
    top: "64.88448844884486%",
    onMouseOver: () => console.log('Events')
  },
  {
    width: "5.6072607260726%",
    height: "18.600660066006597%",
    left: "48.18481848184818%",
    top: "62.07920792079206%",
    onMouseOver: () => console.log('Shop')
  },
  {
    width: "18.148514851485142%",
    height: "15.960396039603959%",
    left: "61.05610561056105%",
    top: "56.96369636963694%",
    onMouseOver: () => console.log('About')
  },
  {
    width: "4.452145214521445%",
    height: "2.9240924092409215%",
    left: "80.03300330033002%",
    top: "62.07920792079208%",
    onMouseOver: () => console.log('Contact')
  },
  {
    width: "5.112211221122105%",
    height: "6.884488448844881%",
    left: "80.69306930693068%",
    top: "72.14521452145213%",
    onMouseOver: () => console.log('Impressum')
  },
];

const Home = () => {
  return (
    <div className="Home">
      <ImageMap className="usage-map" src={PartyStore} map={mapArea} />
    </div>
  );
};

export default Home;

