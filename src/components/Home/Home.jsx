import React from "react";
import PartyStore from "../../assets/images/PartyStore_Sadies.png";
import Team from '../Team/Team';
import Media from '../Media/Media';
import Partners from '../Partners/Partners';
import Events from '../Events/Events';
import Shop from '../Shop/Shop';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Impressum from '../Team/Team';

const Home = () => {
  return (
    <div className="Home">
      <img
        src={PartyStore}
        alt="home"
        usemap="#workmap"
      />
      {/* https://www.image-map.net/ */}
      <map name="image-map">
        <area
          target=""
          alt="Team"
          title="Team"
          href={<Team />}
          coords="342,1534,461,1541,452,1880,337,1841"
          shape="poly"
        />
        <area
          target=""
          alt="Media"
          title="Media"
          href={<Media />}
          coords="561,1333,604,1329,664,1450,671,1660,614,1794,557,1784,509,1665,509,1441"
          shape="poly"
        />
        <area
          target=""
          alt="Partners"
          title="Partners"
          href={<Partners />}
          coords="752,1536,998,1546,991,2015,757,1946"
          shape="poly"
        />
        <area
          target=""
          alt="Events"
          title="Events"
          href={<Events />}
          coords="1165,1762,1160,2005,1217,2005,1224,1759"
          shape="poly"
        />
        <area
          target=""
          alt="Shop"
          title="Shop"
          href={<Shop />}
          coords="1310,1702,1458,2142"
          shape="rect"
        />
        <area
          target=""
          alt="About"
          title="About"
          href={<About />}
          coords="1635,1989,2126,1555"
          shape="rect"
        />
        <area
          target=""
          alt="Contact"
          title="Contact"
          href={<Contact />}
          coords="2157,1686,2262,1746"
          shape="rect"
        />
        <area
          target=""
          alt="Impressum"
          title="Impressum"
          href={<Impressum />}
          coords="2188,1953,2307,2129"
          shape="rect"
        />
      </map>
    </div>
  );
};

export default Home;
