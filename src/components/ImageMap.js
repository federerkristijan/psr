import React from 'react'
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

const mapArea = [
  {
    left: "12.37623762376238%",
    top: "57.78877887788779%",
    height: "10.01980198019802%",
    width: "5.442244224422436%",
    onClick: () => {
      <Team />;
    },
  },
  {
    left: "19.141914191419147%",
    top: "51.518151815181525%",
    height: "12.66006600660066%",
    width: "5.6072607260726%",
    onClick: () => {
      <Media />;
    },
  },
  {
    left: "28.382838283828388%",
    top: "57.2937293729373%",
    height: "15.135313531353134%",
    width: "8.907590759075902%",
    onClick: () => {
      <Partners />;
    },
  },
  {
    left: "43.5213831785095%",
    top: "65.5115536730675%",
    height: "8.91089108910891%",
    width: "1.65016501650165%",
    onClick: () => {
      <Events />;
    },
  },
  {
    left: "48.471878228014454%",
    top: "63.20132013201321%",
    height: "17.16171617161716%",
    width: "4.785478547854786%",
    onClick: () => {
      <Shop />;
    },
  },
  {
    left: "61.50818185837748%",
    top: "58.0858085808581%",
    height: "14.85148514851485%",
    width: "17.16171617161716%",
    onClick: () => {
      <About />;
    },
  },
  {
    left: "79.99003004319597%",
    top: "62.541254125412536%",
    height: "2.4752475247524757%",
    width: "3.9603960396039612%",
    onClick: () => {
      <Contact />;
    },
  },
  {
    left: "81.47517855804746%",
    top: "72.27722772277228%",
    height: "6.9306930693069315%",
    width: "3.7953795379537953%",
    onClick: () => {
      <Impressum />;
    },
  },
];

const ImageMap = () => {
  return (
    <div>
      <ImageMap className="usage-map" src={PartyStore} map={mapArea} />
    </div>
  )
}

export default ImageMap
