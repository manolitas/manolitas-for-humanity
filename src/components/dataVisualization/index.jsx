import React from "react";
import ChartOne from "./chartOne/index.jsx";
import ChartTwo from './chartTwo/index.jsx';


class DataVisulization extends React.Component {
    render() {
        return (
          <div className="data-visualization__component">©
            <ChartTwo />
          </div>
        );
    }
}

export default DataVisulization;