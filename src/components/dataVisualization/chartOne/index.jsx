import React from "react";

var Chart = require("chart.js");

class ChartOne extends React.Component {
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
      type: "pie",
      data: {
        labels: [
          "Mujeres",
          "Hombres",
          "Mujeres enfermas de ELA",
          "Hombres enfermos de ELA"
        ],
        datasets: [
          {
            label: "Población España",
            data: [124011006, 123089389, 1680, 2320],
            backgroundColor: ["pink", "blue", "purple", "cyan"]
          }
        ]
      }
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default ChartOne;
