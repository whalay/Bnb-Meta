import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import NFT from "./pages/NFT";

function App() {
  const [show, setShow] = useState(false);

  const openModalHandler = () => {
    setShow(true);
  };

  const closeModalHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <Modal show={show} onClose={closeModalHandler} />

      <Router>
        <Route path="/" exact>
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home showModal={openModalHandler} />
        </Route>
        <Route path="/nft">
          <NFT />
        </Route>
      </Router>
    </div>
  );
}

export default App;
