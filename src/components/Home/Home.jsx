import React from "react";
import { ImageMap } from '@qiuz/react-image-map';


import PartyStore from "../../assets/images/PartyStore_Sadies.png";
import Team from '../Team/Team';
import Media from '../Media/Media';
import Partners from '../Partners/Partners';
import Events from '../Events/Events';
import Shop from '../Shop/Shop';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Impressum from '../Impressum/Impressum';
import './Home.css';

const mapArea = [
  {
    left: '12.37623762376238%',
    top: '57.78877887788779%',
    height: '10.01980198019802%',
    width: '5.442244224422436%',
    onClick: () => {<Team/>}
  },
  {
    left: '19.141914191419147%',
    top: '51.518151815181525%',
    height: '12.66006600660066%',
    width: '5.6072607260726%',
    onClick: () => {<Media/>}
  },
  {
    left: '28.382838283828388%',
    top: '57.2937293729373%',
    height: '15.135313531353134%',
    width: '8.907590759075902%',
    onClick: () => {<Partners/>}
  },
  {
    left: '43.5213831785095%',
    top: '65.5115536730675%',
    height: '8.91089108910891%',
    width: '1.65016501650165%',
    onClick: () => {<Events/>}
  },
  {
    left: '48.471878228014454%',
    top: '63.20132013201321%',
    height: '17.16171617161716%',
    width: '4.785478547854786%',
    onClick: () => {<Shop/>}
  },
  {
    left: '61.50818185837748%',
    top: '58.0858085808581%',
    height: '14.85148514851485%',
    width: '17.16171617161716%',
    onClick: () => {<About/>}
  },
  {
    left: '79.99003004319597%',
    top: '62.541254125412536%',
    height: '2.4752475247524757%',
    width: '3.9603960396039612%',
    onClick: () => {<Contact/>}
  },
  {
    left: '81.47517855804746%',
    top: '72.27722772277228%',
    height: '6.9306930693069315%',
    width: '3.7953795379537953%',
    onClick: () => {<Impressum/>}
  }
]
const Home = () => {
  return (
    <div className="Home">
    </div>
  );
};

export default Home;


{/* <div className="old">
  <img
        src={PartyStore}
        alt="home"
        useMap="#image-map"
        width="560px"
        height="560px"
      />
      <map name="image-map">
        <area
          target=""
          alt="Team"
          title="Team"
          href={<Team />}
          coords="73,320,95,388"
          shape="poly"
        />
        <area
          target=""
          alt="Media"
          title="Media"
          href={<Media />}
          coords="114,282,126,282,140,302,139,345,124,370,106,350,105,303"
          shape="poly"
        />
        <area
          target=""
          alt="Partners"
          title="Partners"
          href={<Partners />}
          coords="159,320,206,409"
          shape="poly"
        />
        <area
          target=""
          alt="Events"
          title="Events"
          href={<Events />}
          coords="241,366,254,418"
          shape="poly"
        />
        <area
          target=""
          alt="Shop"
          title="Shop"
          href={<Shop />}
          coords="272,352,301,451"
          shape="rect"
        />
        <area
          target=""
          alt="About"
          title="About"
          href={<About />}
          coords="343,326,437,406"
          shape="rect"
        />
        <area
          target=""
          alt="Contact"
          title="Contact"
          href={<Contact />}
          coords="448,351,469,363"
          shape="rect"
        />
        <area
          target=""
          alt="Impressum"
          title="Impressum"
          href={<Impressum />}
          coords="455,407,476,439"
          shape="rect"
        />
      </map>
      </div> */}
