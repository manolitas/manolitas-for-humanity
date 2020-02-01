import React, {Component} from "react";
import Questions from '../Questions';
import {Container} from '@material-ui/core';
import SimpleTabs from "./navbar/index.jsx";
import './index.scss';

class Admin extends Component {
  render() {
    const {questions, handleQuestionType, handleQuestionText, handleQuestionOptions} = this.props;
    return (<div className="app__admin admin">
      <header className="admin__header">
      
      <SimpleTabs></SimpleTabs>
      
      </header>
      <main className="admin__main">
        <section className="admin__questions">
          <Container 
            component="div"
            maxwidth="xl">

            <Questions 
              questions={questions} 
              handleQuestionType={handleQuestionType}
              handleQuestionText={handleQuestionText} 
              handleQuestionOptions={handleQuestionOptions} />

          </Container>
        </section>
      </main>
      <footer className="admin__footer"></footer>
    </div>);
  }
}

export default Admin;