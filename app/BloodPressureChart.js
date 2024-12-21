import React, { useRef, useEffect } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const BloodPressureChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {

    const sortedData = [...data].sort((a, b) => {
        const dateA = new Date(`${a.month} ${a.year}`);
        const dateB = new Date(`${b.month} ${b.year}`);
        return dateA - dateB;
      });

    const recentData = sortedData.slice(-6);
    const labels = recentData.map((item) => `${item.month.slice(0, 3)} ${item.year}`);
    const systolicValues = recentData.map((item) => item.blood_pressure.systolic.value);
    const diastolicValues = recentData.map((item) => item.blood_pressure.diastolic.value);


    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Systolic',
            data: systolicValues,
            borderColor: '#E66FD2',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4,
            borderWidth: 2,
          },
          {
            label: 'Diastolic',
            data: diastolicValues,
            borderColor: '#8C6FE6',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, 
          },
        },
        scales: {
            y: { 
                min: 60,
                max: 180,
              ticks: {
                stepSize: 20, 
                callback: (value) => `${value}`, 
              },
            },
        }
  
      },
    });

    // Cleanup function to destroy the chart instance
    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div className="w-[360px] h-[210px] 2xl:w-[450px]">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BloodPressureChart;
