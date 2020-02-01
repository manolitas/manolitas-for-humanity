import React, {Component} from "react";
import Questions from '../Questions';
import {Container} from '@material-ui/core';

class Admin extends Component {
  render() {
    const {questions, handleQuestionType, handleQuestionText} = this.props;
    return (<div className="app__admin admin">
      <header className="admin__header">Preguntas</header>
      <main className="admin__main">
        <section className="admin__questions">
          <Container 
            component="div"
            maxwidth="xl">

            <Questions 
              questions={questions} 
              handleQuestionType={handleQuestionType}
              handleQuestionText={handleQuestionText} />

          </Container>
        </section>
      </main>
      <footer className="admin__footer"></footer>
    </div>);
  }
}

export default Admin;