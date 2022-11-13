import { useState } from "react";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

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
      <Modal show={show} onClose={closeModalHandler}/>
      <Navbar showModal={openModalHandler}/>
      <Hero />
      <Body />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
