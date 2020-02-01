import React, {Component} from "react";
import QuestionItem from '../QuestionItem';

class Questions extends Component {

  render() {
    const {questions, handleQuestionType,handleQuestionText, handleQuestionOptions} = this.props;
    return (
      <ul className="questions">
        {questions.map(question => (
          <li className="question" key={question.question_id}>
            <QuestionItem 
              question={question} 
              handleQuestionType={handleQuestionType}
              handleQuestionText={handleQuestionText}
              handleQuestionOptions={handleQuestionOptions} />
          </li>
        ))}
        
      </ul>
    );
  }
}

export default Questions;