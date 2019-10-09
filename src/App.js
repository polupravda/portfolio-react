import React from "react";
import "./App.scss";

import Skills from "./components/Skills";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import NavBar from "./components/NavBar";
import Fox from "./components/Fox";
import Github from "./components/Github";
import Ufo from "./components/Ufo";
import Rocket from "./components/Rocket";
import Intro from "./components/Intro";

function App() {
  const skillsList = {
    title: "Skills",
    items: [
      "Front-end Development",
      "Web App Development",
      "UX/UI Design",
      "Animation & Motion Design"
    ]
  };

  const toolsList = {
    title: "Tools & Technologies",
    items: [
      ["HTML5", "CSS3", "Sass", "JS"],
      ["React", "Vue", "GSAP"],
      ["Python", "Flask", "SQL"],
      ["Photoshop", "Illustrator", "Sketch", "After Effects", "Animate"]
    ]
  };

  const introText = {
    myName: "Elena Volovicheva",
    myTitle: "Creative Developer"
  };

  const languages = {
    title: "Languages",
    items: [
      { language: "English", level: "Fluent" },
      { language: "German", level: "Proficient" },
      { language: "Russian", level: "Native" },
      { language: "Ukrainian", level: "Native" },
      {
        language: "French",
        level: "Conversational (good reading and writing skills)"
      },
      { language: "Spanish", level: "Basic" }
    ]
  };

  return (
    <div className="App">
      <div class="bgCanvas">
        <Rocket />
        <Ufo />
        <div class="foreground"></div>
      </div>
      <header className="App-header">
        <div id="navabar-container">
          <NavBar />
        </div>
      </header>
      <section id="main">
        <Intro introText={introText} />
        <Skills skillsList={skillsList} toolsList={toolsList} />
        <Fox />
        <ButtonPrimary buttonText="Learn more" />
        <ButtonSecondary buttonText="More info" />
        <Github />
      </section>
    </div>
  );
}

export default App;
