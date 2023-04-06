import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import aboutImg from "../../assets/about/about.png";
import "./About.scss";

const About = () => {
  return (
    <>
      <Navbar />
      <Header title="ABOUT US" />
      <div className="about">
        <div className="left">
          <img src={aboutImg} alt=""></img>
        </div>
        <div className="right">
          <div className="top">
            <span className="heading">ABOUT INFYTECH</span>
            <span>
              If you are someone who enjoys playing video games, then there are
              a lot of options these days. Not only do you have various
              consoles, PC, but even mobile phones too. However, among these the
              most popular and arguably the best one is the PC. If you are after
              the best gaming experience, it is a gaming PC that you should opt
              for. When you are planning on purchasing a gaming PC, or any Pc in
              general, you have lots of options these days. You can either get
              one offline, i.e. from local stores, or online. There are various
              pros and cons for both of these options. However, as the world
              becomes more familiar with the Internet, the more popular online
              options get. In India, there are various reputed online stores
              when it comes to purchasing computer parts such as peripherals,
              hardware components, accessories, etc. Due to this, it gets
              confusing to choose one. Among all them, one of the options is
              InfyTech. InfyTech is an upcoming computer accessories store and
              esports tournament organizer in India. We have been selling PC
              parts since 2023. Based in Surat, this company was founded by a
              group of tech enthusiasts.
            </span>
          </div>
          <div className="bottom">
            <span className="heading">WHAT WE DO</span>
            <span>
              InfyTech deals in almost any computer component, or peripheral
              that you would need. Regardless of the brand, or the product, it
              is all here. Components such as processor, RAM, graphics card,
              etc. Peripherals such as mouse, keyboard, headphones, etc. It is
              all here. Not just PC parts, but we also sell complete computer
              systems. Both customized ones, and prebuilt ones. Customized
              builds are perfect for those who have in-depth knowledge. However,
              if you are more of a casual gamer and just want to get into PC
              gaming without any hassle, a pre-built Gaming PC is the best
              solution. Thus, regardless of what you are looking for, it is all
              here. And, to make things even better, it is available at one of
              the best rates in India. Furthermore, we even offer doorstep
              delivery all over India. Making it easier than ever to get your
              desired computer products at the best prices. Thus, if you are
              looking for an online computer store, InfyTech is the way to go
              However, InfyTech is a lot more than just any other online
              computer store. InfyTech has worked with prominent brands such as
              AMD, CORSAIR, Coolermaster, Thermaltake, MSI, NVIDIA, and more on
              various events. For example, tournaments, giveaways, etc. As of
              now, InfyTech has organized more than esports tournaments with a
              reach of more than 69 thousand players. And, with more time, these
              numbers are sure to increase.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
