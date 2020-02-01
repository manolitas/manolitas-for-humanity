import React from 'react';
import './chatbot.scss';

class Chatbot extends React.Component {

    render() {
        const { handleChatbot } = this.props;
        return (
            <div className="chat">
                <div className="chatbot__close" onClick={handleChatbot}><i className="fas fa-times"></i></div>
                <div className="messages"></div>
                <div id="edge"></div>
                <form className="actions">
                    <input type="text" placeholder="press 'Enter' to send…" />
                </form>
                <div classname="dummy" style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        )
    }
}

export default Chatbot;