import React from "react";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import Impressum from "./components/Impressum/Impressum";
import Media from "./components/Media/Media";
import Partners from "./components/Partners/Partners";
import Releases from "./components/Releases/Releases";
import Shop from "./components/Shop/Shop";
import Team from "./components/Team/Team";

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
            <Route path="/releases" element={<Releases />} />
            <Route path="/shop" element={<Shop />} />
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
