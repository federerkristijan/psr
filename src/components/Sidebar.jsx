import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import navData from "../lib/navData";

import LeftArrow from "../assets/icons/double_left_arrow_icon.png";
import RightArrow from "../assets/icons/double_right_arrow_icon.png";
import styles from "../styles/global.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <LeftArrow /> : <RightArrow />}
      </button>
      {navData.map((item) => {
        return (
          <NavLink key={item.id} className={styles.sideItem} to={item.link}>
            {item.icon}
            <span className={styles.lineText}>{item.text}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;

// credtis to https://github.com/makeuseofcode/react-collapsible-navbar
