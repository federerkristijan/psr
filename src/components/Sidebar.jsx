import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

import Vinyl from "../assets/icons/vinyl-record.png";
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
        <button onClick={() => {collapseSidebar()}}>
          <img src={Vinyl} alt="vinyl" style={{ width: "40px", background: "none", border: "none" }}/>
        </button>
        <Menu menuItemStyles={{ padding: "1rem", button: {} }}>
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
