import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import styles from "../styles/global.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
      <button>
        
      </button>
    </div>
  )
}

export default Sidebar

// credtis to https://github.com/makeuseofcode/react-collapsible-navbar
