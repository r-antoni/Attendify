import {BsTrash} from "react-icons/bs";
import {Card, Table} from "flowbite-react";
import {FiEdit} from "react-icons/fi";
import {Link} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import axios from "axios";
import React, {useEffect, useState} from "react";

const Teacher = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Teachers",
      path: "/teachers",
    },
  ];

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5000/teachers`);
    setUser(response.data);
  };

  return (
    <div>
      <div className="flex justify-between gap-2 mb-9">
        <div>
          <h2 className="text-3xl text-secondary">Teachers</h2>
          <Breadcrumb model={model} />
        </div>
        <Link to="/add-teacher">
          <Button>Add Teacher</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <Card className="flex-1">
          <h1 className="text-2xl font-semibold text-title px-5 py-2">Attendance Sheet</h1>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Teacher Name</Table.HeadCell>
              <Table.HeadCell>Phone Number</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {users.map((user, index) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{user.TeacherName}</Table.Cell>
                  <Table.Cell>{user.Number}</Table.Cell>
                  <Table.Cell>{user.Email}</Table.Cell>
                  <Table.Cell>{user.Username}</Table.Cell>
                  <Table.Cell className="flex cursor-pointer">
                    <div className="flex gap-x-2">
                      <button>
                        <FiEdit className="w-6 h-6 text-slate-500" />
                      </button>
                      <button>
                        <BsTrash className="w-6 h-6 text-red-600" />
                      </button>
                    </div>
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
