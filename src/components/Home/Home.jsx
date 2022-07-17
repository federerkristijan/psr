import React from "react";
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

const Home = () => {
  return (
    <div className="Home">
      <img
        src={PartyStore}
        alt="home"
        usemap="#image-map"
        width="560px"
        height="560px"
      />
      {/* https://www.image-map.net/ */}
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
    </div>
  );
};

export default Home;
