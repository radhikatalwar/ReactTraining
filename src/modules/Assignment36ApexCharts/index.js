import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "1",
          data: [2.83],
        },
        {
          name: "2",
          data: [3.39],
        },
        {
          name: "3",
          data: [3.96],
        },
        {
          name: "4",
          data: [4.52],
        },
      ],
      options: {
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: [
          "rgba(102,218,38,0.3)",
          "rgba(102,218,38,0.6)",
          "rgba(102,218,38,0.8)",
          "rgba(102,218,38,1)",
        ],
        chart: {
          type: "bar",
          height: 200,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="400"
              height="90"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
