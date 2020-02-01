import React from "react";

import SimpleTabs from "./navbar/index.jsx";
import Chatbot from "./chatbot/chatbot.jsx";
import Paco from "../../images/Paco.svg";
import hero from "../../images/hero-luzon.png";
import "./index.scss";

class Landing extends React.Component {
  render() {
    const { chatbotOpen, handleChatbot, questions } = this.props;

    return (
      <div>
        <SimpleTabs></SimpleTabs>
        <div className="landing__hero-container">
          <img className="landing__hero-container-img" src={hero} alt="hero-luzon-foundation" />
        </div>

        <div
          className={`home__chatbot ${chatbotOpen ? "open" : "closed-paco"}`}
        >
          {chatbotOpen ? (
            <Chatbot 
              handleChatbot={handleChatbot} 
              questions={questions}
            />
          ) : (
            <div className="home__chatbot--closed" onClick={handleChatbot}>
              <img
                className="home__chatbot--closed-paco"
                src={Paco}
                alt="chatbot assistant Paco"
              />
              <p className="home__chatbot--closed-text">Hola!</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Landing;
