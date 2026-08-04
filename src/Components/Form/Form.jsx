import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="Form">
      <div className="Form-main-div">
        <div className="text-content">
          <p className="text-para">GET IN TOUCH</p>
          <h2>Let's work <br/> together</h2>
          <p className="myclass">
            I'm open to UI/UX and frontend missions, short or long-term. Landing
            page, full product redesign, or just a second pair of eyes — let's
            talk.
          </p>
          <div className="profile-links">
            <div className="profile-link">
              <img className="profile-image" src="https://static.vecteezy.com/system/resources/thumbnails/050/592/973/small_2x/unread-message-icon-isolate-on-white-background-png.png"/>
              <a href="#">hello@eliott.dev</a>
            </div>
            <div className="profile-link">
              <img className="profile-image" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/587/small_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"/>
              <a href="#">linkedin.com/in/eliott-dev</a>
            </div>
            <div className="profile-link">
              <img className="profile-image" src="https://static.vecteezy.com/system/resources/thumbnails/046/437/248/small_2x/github-logo-transparent-background-free-png.png"/>
              <a href="#">github.com/eliott-dev</a>
            </div>
          </div>
        </div>
        <div className="form-content">
          <div className="name-email">
            <input
              type="text"
              placeholder="Full name"
              className="input-field"
            />
            <input type="text" placeholder="Email" className="input-field" />
          </div>
          <div className="sub-msg">
            <input type="text" placeholder="Project inquiry" className="input-field" id="subject"/>
            <input type="text" placeholder="Tell me about your project..." className="input-field" id="message"/>
            <button>Send message &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
