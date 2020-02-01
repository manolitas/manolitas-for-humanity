import React from 'react';
import Admin from './components/Admin';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question_id: '1',
          name: "Pregunta de prueba",
          type: {
            open: 'yes',
            guided: [
              'Opción 1',
              'Opción 2',
              'Opción 3'
            ]
          }
        }
      ]
    };
  }

  handleQuestionText = event => {
    const target = event.target;
    console.log(target.dataset.id);
    this.setState(prevState => {
      const newQuestions = [...prevState.questions];
      const index = newQuestions.findIndex(item=>item.question_id === target.dataset.id);
      newQuestions[index].name = target.value;
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
          handleQuestionText={this.handleQuestionText} />
      </div>
    );
  }
}

export default App;
