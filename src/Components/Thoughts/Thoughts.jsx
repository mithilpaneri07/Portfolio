import React from "react";
import "./Thoughts.css";

const Tcards = (props) => {
  return (
    <>
      <div className="Tcard-main">
        <img className="tCard-img" src={props.tCardImg} />
        <div className="card-content">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <button>Read more &rarr;</button>
        </div>
      </div>
    </>
  );
};

const Thoughts = () => {
  return (
    <div className="thoughts-main">
      <div>
        <p className="thoughts-p">THOUGHTS</p>
      </div>
      <div className="from-the-blog">
        <h2 className="blog-text">From the blog</h2>
        <button>All articals &rarr;</button>
      </div>
      <div className="CardStyle">
        <Tcards
          tCardImg="/images/thought1.svg"
          heading="Why I ditched heavy CSS frameworks for Tailwind"
          text="After years of fighting specificity wars, here's what finally convinced me to make the switch."
        />
        <Tcards
          tCardImg="/images/thought2.svg"
          heading="Building a design system from scratch in a weekend"
          text="Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours."
        />
        <Tcards
          tCardImg="/images/thought3.svg"
          heading="5 lessons from my first year of full-time freelancing"
          text="Contracts, pricing, scope creep — the things nobody tells you before you go solo."
        />
      </div>
    </div>
  );
};

export default Thoughts;
