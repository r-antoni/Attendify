import {Card, Table} from "flowbite-react";
import teacherCurrent from "../assets/json/TeacherCurrent.json";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";

const Teacher = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Teachers",
      path: "/teacher",
    },
  ];
  return (
    <div>
      <div className="flex justify-between gap-3 mb-9">
        <div>
          <h2 className="text-3xl text-secondary">Teachers</h2>
          <Breadcrumb model={model} />
        </div>
        <div>
          <Button>Add teacher</Button>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <Card className="flex-1">
          <h1 className="text-2xl font-semibold text-title px-5 py-2">Attendance Sheet</h1>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Teacher name</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>password</Table.HeadCell>
              <Table.HeadCell>action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {teacherCurrent.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.number}</Table.Cell>
                  <Table.Cell>{data.teacher_name}</Table.Cell>
                  <Table.Cell>{data.address}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{data.username}</Table.Cell>
                  <Table.Cell>{data.password}</Table.Cell>
                  <Table.Cell className="flex cursor-pointer">
                    <img src={edit} />
                    <img src={trash} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Teacher;
