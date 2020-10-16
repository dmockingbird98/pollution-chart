import React from 'react';
import ReactApexChart from 'react-apexcharts';



class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: this.props.arr,
        options: {
          chart: {
            height: 500,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#00ccff','#80ff00','#000','#ff3300','#804000','#ffff00'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Concentrations of various pollutants in Atmosphere',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: this.props.dateArr,
            title: {
              text: 'Time Period'
            },
            labels: {
              datetimeUTC: false,
              datetimeFormatter: {
                  year: 'yyyy',
                  month: "MMM 'yy",
                  day: 'd MMM',
                  hour: 'HH:mm',
            }
          }
          },
          yaxis: [{
            title: {
              text: 'Conc of Pollutants(µg/m3)'
            },
            min: 0,
            max: 200
          },
          {
            opposite:true,
            title: {
              text: 'Conc of C-O(µg/m3)'
            },
            min: 0,
            max: 4000
          }],
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>


      );
    }
  }

  export default ApexChart;