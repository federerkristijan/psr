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
import "../styles/global.css";

const ToggleSidebar = () => {
  const { collapseSidebar } = useProSidebar();

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
      <Sidebar defaultCollapsed="true" breakPoint="md">
        <button onClick={() => {collapseSidebar()}} style={{ border: "none", background: "none" }}>
          <img src={vinyl} alt="vinyl" />
        </button>
        <Menu menuItemStyles={{ padding: "1rem", gap: "1rem" }}>
          <MenuItem routerLink={<Link to="/about" />}>
            <img src={about} alt="about" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/contact" />}>
            <img src={contact} alt="contact" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/events" />}>
          <img src={event} alt="events" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/impressum" />}>
          <img src={impress} alt="impress" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/media" />}>
          <img src={media} alt="media" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/partners" />}>
          <img src={partners} alt="partners" />
          </MenuItem>
          <MenuItem routerLink={<Link to="/shop" />}>shop</MenuItem>
          <MenuItem routerLink={<Link to="/team" />}>team</MenuItem>
          <MenuItem routerLink={<Link to="/members" />}>members</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ToggleSidebar;
