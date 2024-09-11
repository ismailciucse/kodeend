import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeInner text-center">
          <h2>
            <i class="ri-mic-line"></i>
            <i class="ri-arrow-right-s-line"></i>
            <i class="ri-file-text-line"></i>
          </h2>
          <h1>Audio to Text Converter</h1>
          <div className="grid-3">
            <div className="item">
              <h3>Save Time</h3>
              <p>
                Turn audio into text instantly. Spend less time typing, more
                time doing what you love.
              </p>
            </div>
            <div className="item">
              <h3>Boost Productivity</h3>
              <p>
                Convert audio notes to easily editable text. Perfect for
                studying and report writing.
              </p>
            </div>
            <div className="item">
              <h3>Improve Accessibility</h3>
              <p>
                Make your content available to everyone by adding text versions
                of audio and video.
              </p>
            </div>
          </div>
          <a href="/login" className="btn-primary">
            Start Converting
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
