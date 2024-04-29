import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import 'chartjs-adapter-date-fns'
import formatDistance from 'date-fns/formatDistance'
import differenceInSeconds from 'date-fns/differenceInSeconds'
import '../styles/SalesGraph.css'

Chart.register(...registerables)

interface SalesData {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

interface SalesGraphProps {
  salesData: SalesData[]
}

const SalesGraph: React.FC<SalesGraphProps> = ({ salesData }) => {
  useEffect(() => {
    if (!salesData || salesData.length === 0) {
      return
    }

    const chartData = {
      labels: salesData.map(data => data.weekEnding),
      datasets: [
        {
          label: 'Retail Sales',
          data: salesData.map(data => data.retailSales),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 3
        },
        {
          label: 'Wholesale Sales',
          data: salesData.map(data => data.wholesaleSales),
          backgroundColor: 'rgba(192, 192, 192, 0.2)',
          borderColor: 'rgba(192, 192, 192, 1)',
          borderWidth: 3
        }
      ]
    }

    const ctx = document.getElementById('salesChart') as HTMLCanvasElement
    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        maintainAspectRatio: false, // Disable aspect ratio
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                month: 'MMM'
              }
            },
            ticks: {
              source: 'data',
              autoSkip: true,
              maxTicksLimit: 12,
              padding: 0
            },
            grid: {
              display: false
            }
          },
          y: {
            display: false
          }
        },
        elements: {
          line: {
            borderWidth: 100,
            tension: 0.4
          },
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    })

    return () => {
      chartInstance.destroy()
    }
  }, [salesData])

  return (
    <>
      Retail Sales
      <canvas id="salesChart" width="100%" height="100%" />
    </>
  )
}

export default SalesGraph
