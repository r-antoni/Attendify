import {Card, Table} from "flowbite-react";
import {GiCheckMark} from "react-icons/gi";
import {HiXMark} from "react-icons/hi2";
import {Link} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import subject from "../assets/json/subject.json";

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
        <Link to="/add-subject">
          <Button>Add Subject</Button>
        </Link>
      </div>
      <div>
        <Card className="flex-1">
          <h3 className="text-2xl font-semibold text-title px-5 py-2">Current subject</h3>
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
        </Card>
      </div>
    </div>
  );
};

export default Subject;
