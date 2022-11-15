import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Home = ({ showModal }) => {
  return (
    <div>
      <Modal />
      <Navbar showModal={showModal} />
      <Hero />
      <Body />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
