import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import "../styles/global.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={open}>
      <ul>
        <li>

        </li>
      </ul>
    </div>
  )
}

export default Sidebar
