import React from "react";
import "../App.scss";

import Skills from "../components/Skills";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import Fox from "../components/Fox";
import Github from "../components/Github";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Bear from "../components/Bear";
import Ninja from "../components/Ninja";
import History from "../components/History";
import ApMDemo from "../components/ApMDemo";
import ApDDemo from "../components/ApDDemo";

function Home() {
  return (
    <>
      <header className="App-header">
        <div id="navabar-container">
          <NavBar />
        </div>
      </header>
      <section id="main">
        <Intro />
        <Skills />
        <History />
        <Fox />
        <Bear />
        <Ninja />
        <ApMDemo />
        <ApDDemo />
        <ButtonPrimary buttonText="Learn more" />
        <ButtonSecondary buttonText="More info" />
        <Github />
      </section>
    </>
  );
}

export default Home;
