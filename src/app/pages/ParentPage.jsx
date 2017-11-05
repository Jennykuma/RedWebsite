import React from "react";
import { Col } from "react-bootstrap";
import MailChimp from "../components/MailChimp";

export default function ParentPage() {
  document.title = "RED | For Parents";

  return (
    <main>
      <div className="container">
        <h1 className="text-center">Parents</h1>
      </div>

      <div className="coloredcontainer">
        <div className="container">
          <h2 className="text-center">What They Learn</h2>
          <p>Drugs are now a commonly seen throughout society, whether it’s in the media or within the hallways of a school. Students are constantly exposed to drugs and awareness is becoming increasingly important. RED aims to aid students in understanding the effects of common drugs on the body, and more specifically the brain. Research and development completed by a team of undergraduate students strive to keep information delivered in presentations relevant, up to date, and accurate. Students participate in hands on activities to further their learning through recreation of drug effects and a deductive investigation activity. Parents are encouraged to discuss drugs with their children and remain open to questions that may arise. RED stresses the importance of research and science based findings when understanding the reality of drug effects. With the large presence of drugs in society today, we must focus on awareness.</p>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center">Presentation & Activities</h2>
        <p>The RED presentation begins with a brief introduction where metaphors are used to explain how brain cells function as well as the different parts of the brain. Building off this understanding, three different drugs are presented to the class. Drugs range from commonly accessible drugs such as alcohol, to prescription drugs such as Adderall, to illegal drugs such as marijuana and cocaine. Students volunteer to participate in demonstrations that model the effects of the various drugs. For example, the effect of alcohol on reaction time is demonstrated by simulating a reaction time test. Following the presentation, students work in groups and investigate three patients in the ER of a hospital. The goal of the tasks is to have students correctly identify the substance(s) impairing each student based on symptoms and vital stats. The presentation is concluded with a Q & A session to address questions and concerns that may arise throughout the presentation.</p>
        <Col md={4}>
          <img className="parents" title="Focused Kids" src="/assets/img/main1.jpg" alt="Focused Kids" />
        </Col>
        <Col md={4}>
          <img className="parents" title="Focused Kids" src="/assets/img/main4.jpg" alt="Focused Kids" />
        </Col>
        <Col md={4}>
          <img className="parents" title="Focused Kids" src="/assets/img/main7.jpg" alt="Focused Kids" />
        </Col>
      </div>

      <div className="coloredcontainer">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">If you have any questions, please click <a className="redbackground" href="/contact-us">here</a></p>
          <MailChimp />
        </div>
      </div>
    </main>
  );
}
