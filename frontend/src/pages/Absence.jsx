import {Card, Table} from "flowbite-react";
import {GiCheckMark} from "react-icons/gi";
import {HiXMark} from "react-icons/hi2";
import absence from "../assets/json/absence.json";
import Breadcrumb from "../components/Breadcrumb";

const Absence = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Absence",
      path: "/absence",
    },
  ];
  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Absence</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="flex-1">
          <h3 className="text-2xl font-semibold text-title px-5 py-2">Absence</h3>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Semester</Table.HeadCell>
              <Table.HeadCell>Absence reason</Table.HeadCell>
              <Table.HeadCell>Absence for</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {absence.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.no}</Table.Cell>
                  <Table.Cell>{data.student_name}</Table.Cell>
                  <Table.Cell>{data.course}</Table.Cell>
                  <Table.Cell>{data.semester}</Table.Cell>
                  <Table.Cell>{data.absence_reason}</Table.Cell>
                  <Table.Cell>{data.absence_for}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <button>
                      <GiCheckMark className="text-white bg-green-400 px-1 py-1 h-6 w-6 rounded" />
                    </button>
                    <button>
                      <HiXMark className="text-white bg-red-500 px-1 py-1 h-6 w-6 rounded" />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <h3 className="text-2xl font-semibold text-title px-5 py-2">Absence records</h3>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Semester</Table.HeadCell>
              <Table.HeadCell>Absence reason</Table.HeadCell>
              <Table.HeadCell>Absence for</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {absence.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.no}</Table.Cell>
                  <Table.Cell>{data.student_name}</Table.Cell>
                  <Table.Cell>{data.course}</Table.Cell>
                  <Table.Cell>{data.semester}</Table.Cell>
                  <Table.Cell>{data.absence_reason}</Table.Cell>
                  <Table.Cell>{data.absence_for}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Absence;
