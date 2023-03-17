import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { GraphQLContextProvider } from "./components/GraphQLContext";

// import { CartContextProvider } from "./context/CartContext";
// import { CartProvider } from "use-shopping-cart";
import SignUpLogin from "./views/SignUpLogin";
import { CartContextProvider } from "./store/CartContext";
import { useState } from "react";

import "./App.css";
import About from "../src/views/About";
import Contact from "../src/views/Contact";
import Events from "../src/views/Events";
import Home from "../src/views/Home";
import Impressum from "../src/views/Impressum";
import Media from "../src/views/Media";
import Partners from "../src/views/Partners";
import Cart from "../src/components/Cart/Cart";
import Shop from "../src/views/Shop";
import Team from "../src/views/Team";
import ToggleSidebar from "./components/Sidebar";

/*todo: potrudi se da ovo baca 404 not found, a ne 200 OK */

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (dataLoaded === false && localStorage.getItem("token")) {
      setDataLoaded("request");
    }
  }, [dataLoaded]);

  return (
    <GraphQLContextProvider
      dataLoaded={dataLoaded}
      setDataLoaded={setDataLoaded}
    >
      <CartContextProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        successUrl="stripe.com"
        cancelUrl="facebook.com"
        currency="EUR"
        allowedCountries={["US", "GB", "DE"]}
        billingAddressCollection={true}
      >
        <BrowserRouter>
          <div className="App">
            <ToggleSidebar />
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
                <Route
                  path="/shop/cart"
                  element={
                      <Cart />
                  }
                />
                <Route path="/team" element={<Team />} />
                <Route path="/signuplogin" element={<SignUpLogin />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </GraphQLContextProvider>
  );
};

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
