import React from "react";
import "./App.css";

import Landing from "./components/landing/index.js";
// import Charts from "./components/charts/index.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatbotOpen: false,
    }

    this.handleChatbot = this.handleChatbot.bind(this);
  }
  
  handleChatbot() {
    this.setState({chatbotOpen: !this.state.chatbotOpen})
}

  render() {
    const { chatbotOpen } = this.state;
    return (
      <div className="app">
        <Landing chatbotOpen={chatbotOpen} handleChatbot={this.handleChatbot}></Landing>
        {/* <Charts></Charts> */}
      </div>
    );
  }
}

export default App;
