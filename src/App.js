import React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";
import Impressum from "./components/Impressum/Impressum";
import Featured from "./components/Media/Featured";
import Media from "./components/Media/Media";
import Press from "./components/Media/Press";
import Partners from "./components/Partners/Partners";
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
            <Route exact path="/media" element={<Media />} />
            <Route path="/media/press" element={<Press/>} />
            <Route path="/media/featured" element={<Featured/>} />
            <Route path="/partners" element={<Partners />} />
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
