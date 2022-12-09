import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import vinyl from "../assets/icons/vinyl-record.png";
import about from "../assets/icons/about.png";
import contact from "../assets/icons/contact.png";
import event from "../assets/icons/event.png";
import impress from "../assets/icons/impressum.png";
import media from "../assets/icons/media.png";
import partners from "../assets/icons/partners.png";
import shop from "../assets/icons/shop.png";
import team from "../assets/icons/team.png";
import members from "../assets/icons/user.png";
import "../styles/global.css";

const ToggleSidebar = () => {
  const { toggleSidebar } = useProSidebar();

  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if(open) {
  //     <img src={Right} alt="right"/>
  //   } else {
  //     <img src={Left} alt= "left"/>
  //   }
  // }, [])

  // const closeButtonHandler = () => {
  //   setOpen(!open)
  // }

  return (
    <div className="sidebar-wrapper">
      <Sidebar defaultCollapsed="true" breakPoint="md" collapsedWidth="100px" height="100%">
        {/* <button
          onClick={() => {
            toggleSidebar();
          }}
          style={{ border: "none", background: "none" }}
        >
          <img src={vinyl} alt="vinyl" />
        </button> */}
        <Menu menuItemStyles={{ padding: "1rem", gap: "1rem" }}>
        <MenuItem routerLink={<Link to="/" />}>
            <img src={vinyl} alt="vinyl" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/members" />}>
            <img src={members} alt="members" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/team" />}>
            <img src={team} alt="team" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/about" />}>
            <img src={about} alt="about" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/events" />}>
            <img src={event} alt="events" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/media" />}>
            <img src={media} alt="media" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/partners" />}>
            <img src={partners} alt="partners" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/shop" />}>
            <img src={shop} alt="shop" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/contact" />}>
            <img src={contact} alt="contact" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/impressum" />}>
            <img src={impress} alt="impress" />
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ToggleSidebar;
