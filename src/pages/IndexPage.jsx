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
        <button id="descriptionButton"><b>Book a Presentation</b></button>
        <br/>
        <button id="descriptionButton"><b>Get Involved</b></button>
      </p>
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
      /*<ImageCarousel path={carousel.path} images={carousel.images} />*/
      <Description />
      /*<Testimonials testimonials={textCarousel.quotes} />*/
      <MailChimp />
      <Brands />
    </main>
  );
}
