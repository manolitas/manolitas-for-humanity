import React from 'react';
import './chatbot.scss';

class Chatbot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: []
        }
    }

    componentDidMount() {
        const {questions} = this.props;
        questions.length && this.setState({
            chat: [
                {
                    bot: true,
                    text: questions[0].name 
                }
            ]
        })
    }

    render() {
        const { handleChatbot, questions} = this.props;
        return (
            <div className="chat">
                <div className="chatbot__close" onClick={handleChatbot}><i className="fas fa-times"></i></div>
                <div className="messages">
                    {this.state.chat.map(item => {
                        return (<p class={`message ${item.bot ? 'message-bot':'message-user'}`}>
                            {item.text}
                        </p>)
                    }
                    )}
                    
                </div>
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