import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GraphQLContextProvider } from "./components/GraphQLContext";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

import "./App.css";
import About from "../src/views/About";
import Contact from "../src/views/Contact";
import Events from "../src/views/Events";
import Home from "../src/views/Home";
import Impressum from "../src/views/Impressum";
import Media from "../src/views/Media";
import Partners from "../src/views/Partners";
import Cart from "../src/components/Cart";
import Shop from "../src/views/Shop";
import Team from "../src/views/Team";

/*todo: potrudi se da ovo baca 404 not found, a ne 200 OK */

function App() {
  return (
    <GraphQLContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/media" element={<Media />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/cart" element={<Cart />} />
              <Route path="/team" element={<Team />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </GraphQLContextProvider>
  );
}

const Layout = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <>
      <Sidebar onMouseOver={() => collapseSidebar}>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default App;
