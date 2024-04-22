import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Reservations Report",
    },
  },

  scales: {
    x: {
      ticks: {
        color: "#d4d4d8",
      },
    },
    y: {
      ticks: {
        color: "#d4d4d8",
      },
    },
  },
};

const labels = ["Actual Month", "Last Month"];

export const data = {
  labels,
  datasets: [
    {
      label: "Differences Between Months",
      data: [3, 5],
      backgroundColor: "green",
    },
  ],
};

type Props = {
  className: string;
};

const ChartTwoMonths: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Bar options={options} data={data} />;
    </div>
  );
};

export default ChartTwoMonths;
