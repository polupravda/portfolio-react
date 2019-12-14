import React from "react";
import "../App.scss";
import { aPitProject } from "../Content";
import APitDesignSystemHeadline from "../components/APitDesignSystemHeadline";
import LogoNuxt from "../components/LogoNuxt";
import LogoSass from "../components/LogoSass";
import LogoJs from "../components/LogoJs";
import LogoVue from "../components/LogoVue";
import OldDesktop from "../components/OldDesktop";
import AppleDesktop from "../components/AppleDesktop";
import Tag from "../components/Tag";
import APitPhase1 from "../components/APitPhase1";
import APitPhase2 from "../components/APitPhase2";
import APitPhase3 from "../components/APitPhase3";
import ButtonSecondary from "../components/ButtonSecondary";

function APit() {
  return (
    <section id="apit-work-container">
      <div id="apit-scene-1">
        <APitDesignSystemHeadline />
        <h2 id="headline-2">{aPitProject.headlineMain2}</h2>
        <h2 className="subline" id="role">
          {aPitProject.subline}
        </h2>
        <div className="tech-stack-container">
          <LogoSass />
          <LogoJs />
          <LogoVue />
          <LogoNuxt />
        </div>
        <h2 className="subline" id="years">
          {aPitProject.years}
        </h2>
        <h2 className="subline" id="used-tools">
          {aPitProject.usedTools}
        </h2>
      </div>
      <div id="apit-scene-2">
        <div className="img-screen-left">
          <p class="img-description">{aPitProject.img1Description}</p>
          <OldDesktop alt={aPitProject.img1Description} />
        </div>
        <p>{aPitProject.paragraph1}</p>
        <Tag tagText={aPitProject.tagText} />
      </div>
      <div id="apit-scene-3">
        <APitPhase1 />
        <p id="scene3-p1">{aPitProject.paragraph2}</p>
        <div id="apit-old-logo-container" className="apit-logo-container">
          <img
            src="assets/images/ap-logo-before.png"
            alt={aPitProject.img2Description}
          />
          <p class="img-description">{aPitProject.img2Description}</p>
        </div>
        <div id="apit-new-logo-container" className="apit-logo-container">
          <img
            src="/assets/images/ap-logo-after.png"
            alt={aPitProject.img3Description}
          />
          <p class="img-description">{aPitProject.img3Description}</p>
        </div>
        <p id="scene3-p2">{aPitProject.paragraph3}</p>
        <div id="ap-brandbook-images-container">
          <img
            src="/assets/images/ap-colours.png"
            alt={aPitProject.img4Description}
          />
          <img
            src="/assets/images/ap-fonts.png"
            alt={aPitProject.img5Description}
          />
        </div>
      </div>
      <div id="apit-scene-4">
        <APitPhase2 />
        <div>
          <p>{aPitProject.paragraph4}</p>
          <p>{aPitProject.paragraph5}</p>
        </div>
        <div id="ap-design-system-img-container">
          <p class="img-description">{aPitProject.img6Description}</p>
          <img
            id="ap-design-system"
            src="/assets/images/apit-design-system.png"
            alt={aPitProject.img6Description}
          />
        </div>
      </div>
      <div id="apit-scene-5">
        <APitPhase3 />
        <div id="apit-scene-5-paragraphs-1">
          <p>{aPitProject.paragraph8}</p>
          <p>{aPitProject.paragraph9}</p>
        </div>
        <div
          id="apit-old-navigation-container"
          className="apit-navigation-container"
        >
          <p class="img-description">{aPitProject.img7Description}</p>
          <img
            src="/assets/images/ap-navigation-old.png"
            alt={aPitProject.img7Description}
          />
        </div>
        <div
          id="apit-new-navigation-container"
          className="apit-navigation-container"
        >
          <p class="img-description">{aPitProject.img8Description}</p>
          <img
            src="/assets/images/ap-navigation-new.png"
            alt={aPitProject.img8Description}
          />
        </div>
        <AppleDesktop />
        <div id="apit-scene-5-paragraph-2-container">
          <div id="apit-scene-5-paragraph-2">
            <p>{aPitProject.paragraph6}</p>
            <p>{aPitProject.paragraph7}</p>
          </div>
          <Tag tagText={aPitProject.tagText} />
        </div>
      </div>
      <div id="apit-scene-6">
        <p>{aPitProject.paragraph10}</p>
        <img
          id="ap-comment-1"
          src="/assets/images/apit-comment-1.png"
          alt={aPitProject.img9Description}
        />
        <img
          id="ap-comment-2"
          src="/assets/images/apit-comment-2.png"
          alt={aPitProject.img9Description}
        />
        <img
          id="ap-comment-3"
          src="/assets/images/apit-comment-3.png"
          alt={aPitProject.img9Description}
        />
      </div>
      <div id="apit-scene-7">
        <p className="p-1">{aPitProject.paragraph11}</p>
        <p className="p-2">{aPitProject.paragraph12}</p>
        <p className="p-3">{aPitProject.paragraph13}</p>
        <ButtonSecondary
          buttonText={aPitProject.buttonText}
          buttonLink={aPitProject.buttonLink}
          buttonWidth="70px"
        />
      </div>
    </section>
  );
}

export default APit;
