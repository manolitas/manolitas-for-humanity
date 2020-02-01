import React from "react";
import ChartTwo from './chartTwo/index.jsx';
import SimpleTabs from "./navbar/index.jsx";
import {Container} from '@material-ui/core';


class DataVisulization extends React.Component {
    render() {
        return (
          <React.Fragment>
            <SimpleTabs></SimpleTabs>
            <div className="data-visualization__component" style={{padding: '10px 0'}}>
              <Container>
                <ChartTwo />
              </Container>
            </div>
          </React.Fragment>
        );
    }
}

export default DataVisulization;