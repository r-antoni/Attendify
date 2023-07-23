import attendanceReports from "../assets/json/attendanceReports.json";
import dashboardData from "../assets/json/dashboardData.json";
import {
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Radar,
  RadarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ReportLineChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        width={500}
        height={300}
        data={dashboardData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Absent" stroke="#8884d8" activeDot={{r: 8}} />
        <Line type="monotone" dataKey="Present" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const ReportRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={attendanceReports}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Subject" dataKey="A" stroke="#8884d8" fill="#4154F1" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
