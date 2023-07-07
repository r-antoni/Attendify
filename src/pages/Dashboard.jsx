import attendanceReports from "../assets/json/attendanceReports.json";
import dashboardData from "../assets/json/dashboardData.json";
import {Breadcrumb} from "flowbite-react";
import {Card} from "flowbite-react";
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
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Dashboard</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* Items */}
      <div className="flex gap-10">
        <div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <Card>
                <h2 className="text-secondary text-xl">
                  Present{" "}
                  <span className="text-sm text-slate-300">| Today</span>
                </h2>
                <div className={`flex px-5`}>
                  <div>
                    <img
                      src="https://freeimghost.net/images/2023/06/15/div.png"
                      alt="div.png"
                      border="0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-[#4154F1] font-bold px-3">
                      145
                    </span>
                    <p className="text-sm text-title font-bold px-3">
                      12%{" "}
                      <span className="text-[#6C757D] font-normal">
                        increase
                      </span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-secondary text-xl">
                  Present{" "}
                  <span className="text-sm text-slate-300">| Today</span>
                </h2>
                <div className={`flex px-5`}>
                  <div>
                    <img
                      src="https://freeimghost.net/images/2023/06/15/div.png"
                      alt="div.png"
                      border="0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-[#4154F1] font-bold px-3">
                      145
                    </span>
                    <p className="text-sm text-title font-bold px-3">
                      12%{" "}
                      <span className="text-[#6C757D] font-normal">
                        increase
                      </span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <h2 className="text-secondary text-xl">
                  Present{" "}
                  <span className="text-sm text-slate-300">| Today</span>
                </h2>
                <div className={`flex px-5`}>
                  <div>
                    <img
                      src="https://freeimghost.net/images/2023/06/15/div.png"
                      alt="div.png"
                      border="0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl text-[#4154F1] font-bold px-3">
                      145
                    </span>
                    <p className="text-sm text-title font-bold px-3">
                      12%{" "}
                      <span className="text-[#6C757D] font-normal">
                        increase
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <h2 className="text-secondary text-xl">
                  Reports <span className="text-sm text-slate-300">/Today</span>
                </h2>
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{r: 8}}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-112">
          <Card>
            <h2 className="text-secondary text-xl">
              Attendance Report{" "}
              <span className="text-sm text-slate-300">| This Month</span>
            </h2>
            <ResponsiveContainer width="100%" aspect={1}>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={attendanceReports}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Mike"
                  dataKey="A"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
