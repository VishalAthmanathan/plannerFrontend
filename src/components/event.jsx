// import React from "react";
// import './component_CSS/event.css'
// import logo from './assets/nexusLogo.png';
// import img1 from './assets/spiderlogo.jpg'

// const EventComponent = () => {
//   return (
//     <div className="eventPage">
//       <div className="eventHero">
//         <h1>Title</h1>
//         <div className="hostedBy">
//           <img src={logo} alt="" />
//           <h3>Hosted BY:</h3>
//           <h3>Actor A and Actor B</h3>
//         </div>
//       </div>
//       <div className="eventMain">
//         <div className="eventLeft">
//           <img src={img1} alt="" />
//           <h2>Details</h2>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
//             voluptas quos vitae illum et omnis sint beatae placeat doloribus
//             praesentium, commodi aliquid, itaque voluptatem esse quod maiores.
//             Id, illum non.
//           </p>
//           <ul>
//             <li>Agenda 1</li>
//             <li>Agenda 2</li>
//             <li>Agenda 3</li>
//             <li>Agenda 4</li>
//           </ul>
//           <b>About the Speaker</b>
//           <div className="eventTags">
//             <a href="/">
//               <button>Tags</button>
//             </a>
//           </div>
//         </div>
//         <div className="eventRight">
//           <div className="EventHead">
//             <img src={img1} alt="" />
//             <div className="eventDescription">
//               <h4>title</h4>
//               <p>group name</p>
//             </div>
//           </div>
//           <div className="eventData"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventComponent;

import React, { useState } from "react";
import "./component_CSS/event.css";
import logo from "./assets/nexusLogo.png";
import img1 from "./assets/spiderlogo.jpg";

const EventComponent = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  const handleImageClick = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage('');
  };

  return (
    <div className="eventPage">
      <div className="eventHero">
        <h1>Season of AI</h1>
        <div className="hostedBy">
          <img src={logo} alt="Host Logo" />
          <div>
            <h3>Hosted BY:</h3>
            <h3>Ash and 3 others</h3>
          </div>
        </div>
      </div>
      <div className="eventMain">
        <div className="eventLeft">
          <img src={img1} alt="Event Image" />
          <h2>Details</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            voluptas quos vitae illum et omnis sint beatae placeat doloribus
            praesentium, commodi aliquid, itaque voluptatem esse quod maiores.
            Id, illum non.
          </p>
          <ul>
            <li>New Technology</li>
            <li>Education & Technology</li>
            <li>Microsoft Azure</li>
            <li>Web Technology</li>
            <li>Xamarin</li>
          </ul>
          <b>About the Speaker</b>
          <div className="eventTags">
            <a href="/">
              <button>Tags</button>
            </a>
          </div>
        </div>
        <div className="eventRight">
          <div className="EventHead">
            <img src={img1} alt="Event Host Image" />
            <div className="eventDescription">
              <h4>AshSpidy</h4>
              <p>Microsoft MVP</p>
            </div>
          </div>
          <div className="eventData">
            <p>Saturday, June 1, 2024</p>
            <p>7:00 PM to 9:00 PM IST</p>
            <p>Presidio Solutions Private Limited</p>
            <p>
              8th Floor, InduQbe Alpine, next to Ekkattuthangal Metro Station,
              Labour Colony, SIDCO Industrial Estate
            </p>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003755084515!2d80.04049737484137!3d12.971611287343807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1717090026881!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="submitButton">
            <button className="eventSub">Share</button>
            <button className="eventSub">Attend</button>
          </div>
        </div>
      </div>
      <div className="detailsSection">
        <h2>Attendees (97)</h2>
        <div className="attendeesList">
          <img src={img1} alt="Attendee 1" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Attendee 2" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Attendee 3" onClick={() => handleImageClick(img1)} />
          {/* Add more attendee images as necessary */}
        </div>
      </div>
      <div className="photosSection">
        <h2>Photos</h2>
        <div className="photosList">
          <img src={img1} alt="Photo 1" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Photo 2" onClick={() => handleImageClick(img1)} />
        </div>
      </div>
      <div className="sponsorsSection">
        <h2>Sponsors</h2>
        <div className="sponsorsList">
          <img src={img1} alt="Sponsor 1" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Sponsor 2" onClick={() => handleImageClick(img1)} />
        </div>
      </div>
      {/* <div className="mapContainer"></div> */}
      <div className="interestedSection">
        <h2>Members are also interested in</h2>
        <div className="interestedList">
          <img src={img1} alt="Interested Event 1" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Interested Event 2" onClick={() => handleImageClick(img1)} />
          <img src={img1} alt="Interested Event 3" onClick={() => handleImageClick(img1)} />
          {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={popupImage} alt="Popup" />
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
