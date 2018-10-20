import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Testimonials from "../components/TextCarousel";
import MailChimp from "../components/MailChimp";
import "../styles/Brands.css";
import "../styles/Navigation-Clean1.css";
import "../styles/Simple-Slider.css";


function Description() {
  return (

    <div className="container redcontainer">
      <h1 className="text-center">
        <p id="firstLetter">Reforming</p>
        <div className="space"></div>
        <p id="firstLetter">Education</p>
        <div className="space">on</div>
        <p id="firstLetter-secondLine">Drugs</p>
      </h1>
      {/* eslint-disable-next-line */}
      <br/>
      <p> <b>Taking a new perspective of addressing drug use</b>
        <br/>
        <div className="button-container">
          <button id="descriptionButton"><b>Book a Presentation</b></button>
          <br/>
          <button id="descriptionButton"><b>Get Involved</b></button>
        </div>
      </p>
    </div>
  );
}

function Mission() {
  return (

    <div className="mission-container">
      <p> Fentanyl was declared an epedemic in 2017 when 4000 individuals died due to overdose. This number has ever been increasing and poses a challenge to the health care system.
      <br/><br/>
      As a club we educate youth/citizens about reactional use through its biological effects and interactive fun acitivies. These activities help citizens understand the benfits and consequences of drugs helping them make more informed decsions. </p>
    </div>

  );
}

function Stats() {
  return (

    <div className="stats-container">
      <div className="stat-card"> 21 locations </div>
      <div className="stat-card"> 62 presentations </div>
      <div className="stat-card"> 1,468 students </div>
      <div className="stat-card"> 130 volunteers </div>
    </div>

  );
}

function Brands() {
  return (
    <div className="brands">
      <img src={require("../assets/images/UniversityOfCalgary.png")} alt="University of Calgary" />
      <img src={require("../assets/images/StudentUnion.png")} alt="Students' Union" />
      <img src={require("../assets/images/Devon.png")} alt="Devon" />
    </div>
  );
}

export default function IndexPage() {
  document.title = "RED | Reforming Education on Drugs";


  const carousel = {
    path: "/assets/images/",
    images: ["main10.jpg", "main3.jpg", "main5.jpg", "main8.jpg", "main9.jpg"],
  };

  const textCarousel = {
    quotes: [
      {
        name: "- G.P. Vanier Grade 7 Teacher",
        quote: "It was really informative, I learned new things myself.",
      },
      {
        name: "- G.P. Vanier Grade 7 Teacher",
        quote: "Your instructors were excellent. Thank you so much.",
      },
      {
        name: "- G.P. Vanier Grade 9 Teacher",
        quote: "Same time next year, with thanks to all.",
      },
    ],
  };

  return (
    <main>
      <Description />
      <Mission />
      <Stats />
      <MailChimp />
      <Brands />
    </main>
  );
}
