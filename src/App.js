import React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

import "./App.css";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Events from "../src/components/Events";
import Home from "../src/components/Home";
import Impressum from "../src/components/Impressum";
import Media from "../src/components/Media";
import Partners from "../src/components/Partners";
import Cart from "../src/components/Cart";
import Shop from "../src/components/Shop";
import Team from "../src/components/Team";

function App() {
  return (
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
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
