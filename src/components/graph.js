import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './graph.css';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const MarketSizeAdoptionDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Market size data (in billion USD)
      const blockchainMarket = [1.2, 2.9, 4.5, 6.6, 11.1, 19.9, 39.7];
      const aiMarket = [9.5, 14.7, 22.6, 34.9, 51.5, 76.5, 108.4];
      const aiAgentsMarket = [0.5, 1.2, 2.1, 3.5, 5.4, 7.8, 10.5];
      const mlMarket = [7.3, 10.8, 15.2, 23.5, 32.7, 42.1, 51.2];
      
      // Adoption rate data (% of companies)
      const blockchainAdoption = [1, 3, 5, 11, 15, 22, 30];
      const aiAdoption = [4, 9, 14, 23, 35, 47, 60];
      const aiAgentsAdoption = [0.5, 2, 5, 12, 20, 30, 45];
      const mlAdoption = [3, 7, 12, 20, 30, 42, 55];
      
      const years = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [
            {
              label: 'Blockchain Market Size',
              data: blockchainMarket,
              borderColor: 'rgba(0, 255, 255, 1)',
              backgroundColor: 'rgba(0, 255, 255, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
            },
            {
              label: 'AI Market Size',
              data: aiMarket,
              borderColor: 'rgba(255, 0, 255, 1)',
              backgroundColor: 'rgba(255, 0, 255, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
            },
            {
              label: 'AI Agents Market Size',
              data: aiAgentsMarket,
              borderColor: 'rgba(255, 165, 0, 1)',
              backgroundColor: 'rgba(255, 165, 0, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
            },
            {
              label: 'Machine Learning Market Size',
              data: mlMarket,
              borderColor: 'rgba(0, 128, 0, 1)',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
              yAxisID: 'y',
              tension: 0.4,
            },
            {
              label: 'Blockchain Adoption',
              data: blockchainAdoption,
              borderColor: 'rgba(0, 255, 255, 0.5)',
              backgroundColor: 'rgba(0, 255, 255, 0.1)',
              borderDash: [5, 5],
              yAxisID: 'y1',
              tension: 0.4,
            },
            {
              label: 'AI Adoption',
              data: aiAdoption,
              borderColor: 'rgba(255, 0, 255, 0.5)',
              backgroundColor: 'rgba(255, 0, 255, 0.1)',
              borderDash: [5, 5],
              yAxisID: 'y1',
              tension: 0.4,
            },
            {
              label: 'AI Agents Adoption',
              data: aiAgentsAdoption,
              borderColor: 'rgba(255, 165, 0, 0.5)',
              backgroundColor: 'rgba(255, 165, 0, 0.1)',
              borderDash: [5, 5],
              yAxisID: 'y1',
              tension: 0.4,
            },
            {
              label: 'Machine Learning Adoption',
              data: mlAdoption,
              borderColor: 'rgba(0, 128, 0, 0.5)',
              backgroundColor: 'rgba(0, 128, 0, 0.1)',
              borderDash: [5, 5],
              yAxisID: 'y1',
              tension: 0.4,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    var baseSize = Math.min(Math.round(width / 48), 15);
                    
                    if (width < 768) {
                      return baseSize * 1.2;
                    }
                    return baseSize;
                  }
                },
                padding: 10,
              },
              onClick: function(e, legendItem, legend) {
                const index = legendItem.datasetIndex;
                const ci = legend.chart;
                if (ci.isDatasetVisible(index)) {
                  ci.hide(index);
                  legendItem.hidden = true;
                } else {
                  ci.show(index);
                  legendItem.hidden = false;
                }
              },
            },
            title: {
              display: true,
              text: 'Technology Market Size & Adoption Rate',
              color: '#fff',
              font: {
                size: function(context) {
                  var width = context.chart.width;
                  return Math.min(Math.round(width / 32), 20);
                }
              }
            },
            datalabels: {
              color: '#fff',
              anchor: 'end',
              align: 'top',
              offset: 5,
              display: 'auto',
              font: {
                weight: 'bold',
                size: function(context) {
                  var width = context.chart.width;
                  return Math.min(Math.round(width / 64), 12);
                }
              },
              formatter: (value, context) => {
                if (context.datasetIndex < 4) {
                  return '$' + value + 'B';
                } else {
                  return value + '%';
                }
              }
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Market Size (Billion USD)',
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    return Math.min(Math.round(width / 48), 18);
                  }
                }
              },
              ticks: {
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    return Math.min(Math.round(width / 64), 15);
                  }
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Adoption Rate (%)',
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    return Math.min(Math.round(width / 48), 18);
                  }
                }
              },
              ticks: {
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    return Math.min(Math.round(width / 64), 15);
                  }
                }
              },
              grid: {
                drawOnChartArea: false
              }
            },
            x: {
              ticks: {
                color: '#fff',
                font: {
                  size: function(context) {
                    var width = context.chart.width;
                    return Math.min(Math.round(width / 64), 15);
                  }
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          },
          elements: {
            point: {
              radius: 3,
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: (context) => context.dataset.borderColor,
              hoverRadius: 8,
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="chart-container">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      <div className="tech-info">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Technology</th>
              <th>Market Size</th>
              <th>Adoption</th>
              <th>YoY Growth</th>
              <th>Market Share</th>
              <th>2025 Forecast</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blockchain</td>
              <td>$39.7B</td>
              <td>30%</td>
              <td>+99.5%</td>
              <td>18.9%</td>
              <td>$79.4B</td>
            </tr>
            <tr>
              <td>AI</td>
              <td>$108.4B</td>
              <td>60%</td>
              <td>+41.7%</td>
              <td>51.7%</td>
              <td>$153.6B</td>
            </tr>
            <tr>
              <td>AI Agents</td>
              <td>$10.5B</td>
              <td>45%</td>
              <td>+34.6%</td>
              <td>5.0%</td>
              <td>$14.1B</td>
            </tr>
            <tr>
              <td>Machine Learning</td>
              <td>$51.2B</td>
              <td>55%</td>
              <td>+21.6%</td>
              <td>24.4%</td>
              <td>$62.5B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketSizeAdoptionDashboard;