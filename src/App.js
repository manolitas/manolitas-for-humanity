import React from 'react';
import Admin from './components/Admin';
import './App.css';
import data from './questions.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }
  componentDidMount() {
    this.setState({
      questions: data.users.questions
    });
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
    const {questions} = this.state;
    return (
      <div className="app">
        <Admin 
          questions={questions} 
          handleQuestionType={this.handleQuestionType}
          handleQuestionText={this.handleQuestionText} 
          handleQuestionOptions={this.handleQuestionOptions} />
      </div>
    );
  }
}

export default App;
