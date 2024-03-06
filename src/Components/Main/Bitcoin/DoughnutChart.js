import React from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
    Chart.register(CategoryScale);
  const data = {
    labels: [ 'Crowd Sale investors 80%', 'Foundation 20%'],
    datasets: [
      {
        data: [80,20],
        backgroundColor: ["#0082ff","#faa002"],
        
      },
    ],
  };
  

  const options = {
   cutout:"70%",
   plugins: {
    legend: {
      position: 'right', // Change label position here
    },
   

  },
  layout: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  },
  
  aspectRatio: 2, // Set aspect ratio to maintain a square shape
  responsive: true, 
  canvas: {
    width: 800,
    height: 400,
  },
}

  return <>
  <Doughnut data={data} options={options}/>
  <style>
  {`
    .chartjs-legend .chartjs-legend-item .chartjs-legend-rect {
      border-radius: 50%; /* Adjust the border radius as needed */
    }
  `}
</style></>;
};

export default DoughnutChart;