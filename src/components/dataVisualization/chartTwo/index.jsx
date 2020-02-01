import React from "react";

var Chart = require("chart.js");

class ChartTwo extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  //   componentDidUpdate() {
  //     this.myChart.data.labels = this.props.data.map(d => d.label);
  //     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
  //     this.myChart.update();
  //   }

  componentDidMount() {
    new Chart(this.chartRef.current, {
      type: "doughnut",
      data: {
        labels: [ "Hombres", "Mujeres"],
        datasets: [
          {
            label: "Enfermos ELA",
            data: [2320, 1680],
            backgroundColor: ["green", "orange"]
          }
        ]
      }
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default ChartTwo;
