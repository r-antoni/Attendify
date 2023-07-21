import { Table } from "flowbite-react";
import Breadcrumb from "../components/Breadcrumb"
import Button from "../components/Button";
import { Link } from "react-router-dom";

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
          <Breadcrumb model={model}/>
        </div>
        <div>
          <Button>
            <Link to="/form-submission">Send Application</Link> 
          </Button>
        </div>
      </div>
      <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Absence Reason</Table.HeadCell>
              <Table.HeadCell>Absence For</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
            </Table.Head>
          </Table>
    </div>
  )
}

export default AbsentApp