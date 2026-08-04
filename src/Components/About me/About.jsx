import React from "react";
import './About.css'

const About = () => {
  return (
    <div className="about-section-main">
        <div>
            <img className="about-img" src="https://images.unsplash.com/photo-1781902835005-ab8a30d8c0dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"/>
        </div>

      <div className="about-section-text">
        <p style={{color:"#006400"}}>ABOUT ME</p>
        <h2 className="about-heading">A bit about</h2>
        <h2 className="about-heading">who I am</h2>
        <p className="about-text">
          I'm Eliott, a freelance designer and frontend developer based in Paris
          with 5 years of experience shipping digital products for startups,
          agencies, and scale-ups across Europe. I thrive at the intersection of
          great design and clean code.
        </p>
        <p className="about-text">
          I believe great interfaces are invisible — they get out of the user's
          way. My work is fast, accessible and built to last. When I'm not
          coding, you'll find me hiking or hunting for a good espresso.
        </p>
        <span className="about-text">STACK & TOOLS</span>
        <div className="skills-section">
          <span className="skills">Tailwind CSS</span>
          <span className="skills">Alpine.js</span>
          <span className="skills">Figma</span>
          <span className="skills">HTML / CSS</span>
          <span className="skills">JavaScript</span>
          <span className="skills">Symfony</span>
          <span className="skills">Framer</span>
          <span className="skills">Webflow</span>
        </div>
      </div>
    </div>
  );
};

export default About;
