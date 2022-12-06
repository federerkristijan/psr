import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

// import navData from "../lib/navData";

import LeftArrowIcon from "../assets/icons/LeftArrow.png";
import RightArrowIcon from "../assets/icons/RightArrow.png";
import styles from "../styles/global.css";

const ToggleSidebar = () => {
  const { collapseSidebar } = useProSidebar();
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="sidebar-wrapper">
      <Sidebar closeOnClick="true">
        <Menu>
          <MenuItem routerLink={<Link to="/about" />}>About</MenuItem>
          <MenuItem routerLink={<Link to="/contact" />}>Contact</MenuItem>
          <MenuItem routerLink={<Link to="/events" />}>events</MenuItem>
          <MenuItem routerLink={<Link to="/impressum" />}>impressum</MenuItem>
          <MenuItem routerLink={<Link to="/media" />}>media</MenuItem>
          <MenuItem routerLink={<Link to="/partners" />}>partners</MenuItem>
          <MenuItem routerLink={<Link to="/shop" />}>shop</MenuItem>
          <MenuItem routerLink={<Link to="/team" />}>team</MenuItem>
          <MenuItem routerLink={<Link to="/members" />}>members</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ToggleSidebar;
