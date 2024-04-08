import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  tension: 0.3,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
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

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels,
  datasets: [
    {
      label: "Reservations",
      data: [10, 15, 10, 59, 159, 100, 59],
      borderColor: "#e4e4e7",
      backgroundColor: "#fff",
    },
  ],
};

const Chart = () => {
  return <Line className="block w-full h-full" options={options} data={data} />;
};

export default Chart;
