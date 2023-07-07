import {Breadcrumb} from "flowbite-react";
import {Card} from "flowbite-react";
import { ReportLineChart, ReportRadarChart } from "../components/Charts";

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
                <ReportLineChart />
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
            <ReportRadarChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
