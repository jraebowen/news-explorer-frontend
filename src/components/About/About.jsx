import "./About.css";

import authorPic from "../../assets/author-pic.jpg";

function About() {
  return (
    <section className="about">
      <img src={authorPic} alt="author image" className="about__image" />
      <div className="about__content">
        <p className="about__title">About the author</p>
        <p className="about__description">
          {" "}
          My name is Jaimie Bowen and I am an aspiring software engineer with
          experience in JavaScript, React, Node.js, Express, MongoDB, HTML, CSS,
          and more.<br></br>
          <br></br>
          My original background is in marketing where I was most recently the
          Director of Performance Marketing at GoPro. I hope to blend my
          engineering and marketing experience to help companies build excellent
          products for consumers.
        </p>
      </div>
    </section>
  );
}

export default About;
