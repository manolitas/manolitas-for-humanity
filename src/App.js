import React from 'react';
import Admin from './components/admin';
import './App.css';
import data from './questions.json';
import Landing from "./components/landing/index.js";
import DataVisulization from "./components/dataVisualization/index.jsx";
import {Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      chatbotOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      questions: data.users.questions
    });
  }

  handleChatbot = () => {
    this.setState({chatbotOpen: !this.state.chatbotOpen})
  }

  handleQuestionText = event => {
    const target = event.target;
    this.setState(prevState => {
      const newQuestions = [...prevState.questions];
      const index = newQuestions.findIndex(item=>item.question_id === target.dataset.id);
      newQuestions[index].name = target.value;
      return newQuestions;
    }); 
  }

  handleQuestionOptions = event => {
    const target = event.target;
    this.setState(prevState => {
      const newQuestions = [...prevState.questions];
      const index = newQuestions.findIndex(item=>item.question_id === target.dataset.id);
      newQuestions[index].type.guided[target.dataset.option] = target.value;
      return newQuestions;
    }); 
  }


  handleQuestionType = event => {
    const target = event.target;
    this.setState(prevState => {
      const newQuestions = [...prevState.questions];
      const index = newQuestions.findIndex(item=>item.question_id === target.dataset.id);
      newQuestions[index].type.open = target.value;
      return newQuestions;
    });
  }

  render() {
    const {questions, chatbotOpen} = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => (
            <Landing 
              chatbotOpen={chatbotOpen} 
              handleChatbot={this.handleChatbot} 
              questions={questions}
            />)}
          />
          <Route path="/admin" render={() => (
            <Admin 
              questions={questions} 
              handleQuestionType={this.handleQuestionType}
              handleQuestionText={this.handleQuestionText} 
              handleQuestionOptions={this.handleQuestionOptions}
            />)}
          />
          <Route path="/dashboard" render={() => <DataVisulization></DataVisulization>} />
        </Switch>
      </div>
    );
  }
}

export default App;
