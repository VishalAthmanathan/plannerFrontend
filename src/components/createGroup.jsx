import React from "react";
import "./component_CSS/createGroup.css";
import meetupLogo from "./assets/nexusLogo.png";
import heroImage from "./assets/spiderlogo.jpg";
import feature1 from "./assets/spiderlogo.jpg";
import feature2 from "./assets/spiderlogo.jpg";
import feature3 from "./assets/spiderlogo.jpg";
import feature4 from "./assets/spiderlogo.jpg";

const CreateGroupComponent = () => {
  return (
    <div>
      <header className="hero">
        <img src={meetupLogo} alt="Meetup Logo" className="hero-logo" />
        <div className="createHead">
          <div className="hero-content">
            <h1>Meetup—The people platform.</h1>
            <p>Where interests become passions.</p>
            <p>
              Your new community is waiting for you. For 20+ years, millions of
              people have chosen Meetup to make real connections over shared
              interests. Start a group today.
            </p>
            <button className="cta-button">Start a group</button>
          <img src={heroImage} alt="Hero" className="hero-image" />
          </div>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <img src={feature1} alt="Reach New People" />
          <h2>Reach New People</h2>
          <p>
            Connect with people in your area who are curious about the things
            you love.
          </p>
          <a href="#" className="feature-link">
            Start now
          </a>
        </div>
        <div className="feature">
          <img src={feature2} alt="An App for Organizing" />
          <h2>An App for Organizing</h2>
          <p>
            Chat with attendees, see attendance, and make updates to your events
            with the Meetup app.
          </p>
          <a href="#" className="feature-link">
            Start now
          </a>
        </div>
        <div className="feature">
          <img src={feature3} alt="Continuous Growth" />
          <h2>Continuous Growth</h2>
          <p>
            We'll keep promoting your group throughout our network so it
            continues to grow.
          </p>
          <a href="#" className="feature-link">
            Start now
          </a>
        </div>
        <div className="feature">
          <img src={feature4} alt="Offset Costs" />
          <h2>Offset Costs</h2>
          <p>
            Get support from your group members with member dues, event fees, or
            our fundraising tools.
          </p>
          <a href="#" className="feature-link">
            Start now
          </a>
        </div>
      </section>
      <section className="cta">
        <h2>Make 2024 your year with Meetup</h2>
        <p>
          Make time for your interests and meet people who share them. Lasting
          connections are made on Meetup.
        </p>
        <button className="cta-button">Start a group</button>
      </section>
      <footer>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Your Account</h3>
            <ul>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Discover</h3>
            <ul>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Calendar</a>
              </li>
              <li>
                <a href="#">Topics</a>
              </li>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">Online Events</a>
              </li>
              <li>
                <a href="#">Local Guides</a>
              </li>
              <li>
                <a href="#">Make Friends</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreateGroupComponent;
