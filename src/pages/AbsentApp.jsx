import {Card, Table} from "flowbite-react";
import {Link} from "react-router-dom";
import absence from "../assets/json/absence.json";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

const AbsentApp = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Absence Record",
      path: "/absent-app",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-3 mb-9">
        <div>
          <h2 className="text-3xl text-secondary">Absence Records</h2>
          <Breadcrumb model={model} />
        </div>
        <div>
          <Button>
            <Link to="/form-submission">Send Application</Link>
          </Button>
        </div>
      </div>
      <Card>
        <h1 className="text-2xl font-semibold text-title px-5 py-2">Absence record</h1>
        <Table className="!w-full">
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Student Name</Table.HeadCell>
            <Table.HeadCell>Course</Table.HeadCell>
            <Table.HeadCell>Absence Reason</Table.HeadCell>
            <Table.HeadCell>Absence For</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {absence.map((data, i) => (
              <Table.Row key={i}>
                <Table.Cell>{data.no}</Table.Cell>
                <Table.Cell>{data.student_name}</Table.Cell>
                <Table.Cell>{data.semester}</Table.Cell>
                <Table.Cell>{data.absence_reason}</Table.Cell>
                <Table.Cell>{data.absence_for}</Table.Cell>
                <Table.Cell>
                  <p className="bg-green-400 flex justify-center  py-2 text-white rounded-lg">Approved</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
};

export default AbsentApp;
