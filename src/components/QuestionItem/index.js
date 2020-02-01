import React, {Component} from "react";
import {Box, TextField, RadioGroup, Radio, FormControlLabel} from '@material-ui/core';

class QuestionItem extends Component {
  render() {
    const {handleQuestionType, question, handleQuestionText, handleQuestionOptions} = this.props;
    const {question_id, name, type} = question;

    return (
      <Box 
        component="div"
        className="question__block"
        >
          <TextField 
            id={question_id}
            type="text"
            required
            label="pregunta"
            size="medium"
            variant="outlined"
            fullWidth="true"
            value={name}
            onChange={handleQuestionText}
            inputProps={{"data-id": question_id}}
          />

          <RadioGroup className="question__block-type" onChange={handleQuestionType}>
            <FormControlLabel
              value="no"
              checked={type.open === 'no' ? true:false}
              control={<Radio inputProps={{"data-id": question_id}}/>}
              label="Dirigida"
              className="question__block-type-item"
            />
            <FormControlLabel
              value="yes"
              checked={type.open === 'yes' ? true:false}
              control={<Radio inputProps={{"data-id": question_id}} />}
              label="Libre"
              className="question__block-type-item"
            />
          </RadioGroup>

          <ul className="question__block-options">
            {(type.open === 'no') && type.guided.map((option, index) => {
              return (
                <li className="question__block-option" key={index}>
                  <TextField 
                    id="question_option_"
                    type="text"
                    required
                    label="Opción de respuesta"
                    size="medium"
                    variant="outlined"
                    value={option}
                    fullWidth="true"
                    inputProps={{"data-id": question_id,"data-option": index}}
                    onChange={handleQuestionOptions}
                  />
                </li>
              );
            })}
            
          </ul>

      </Box>
      
    );
  }
}

export default QuestionItem;