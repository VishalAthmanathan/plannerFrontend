import React from "react";
import "./Loader.css";
import loadervid from './assets/loader.gif';

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        <img className="bg-video__content" src={loadervid} alt="Your browser is not supported!" />
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;