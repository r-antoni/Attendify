import {Card, Table} from "flowbite-react";
import Button from "../components/Button";
import subject from "../assets/json/subject.json";
import Breadcrumb from "../components/Breadcrumb";

const Subject = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Subjects",
      path: "/subjects",
    },
  ];
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex-col gap-3 mb-9">
          <h2 className="text-3xl text-secondary">Subjects</h2>
          <Breadcrumb model={model} />
        </div>
        <div>
          <Button>Add Subject</Button>
        </div>
      </div>
      <div>
        <Card className="flex-1">
          <h1 className="text-2xl font-semibold text-title px-5 py-2">Current subject</h1>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Subject Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Semester</Table.HeadCell>
              <Table.HeadCell>assigned Teacher</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {subject.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.no}</Table.Cell>
                  <Table.Cell>{data.subject_name}</Table.Cell>
                  <Table.Cell>{data.course}</Table.Cell>
                  <Table.Cell>{data.semester}</Table.Cell>
                  <Table.Cell>{data.assigned_teacher}</Table.Cell>
                  <Table.Cell>{data.action}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Subject;
