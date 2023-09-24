import {BsTrash} from "react-icons/bs";
import {Card, Table} from "flowbite-react";
import {FiEdit} from "react-icons/fi";
import {Link} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import axios from "axios";
import React, {useEffect, useState} from "react";

const Student = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Students",
      path: "/students",
    },
    {
      title: "Update Student",
      path: "/students/update-student",
    },
  ];

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5005/students`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/students/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between gap-2 mb-9">
        <div>
          <h2 className="text-3xl text-secondary">Students</h2>
          <Breadcrumb model={model} />
        </div>
        <Link to="/add-student">
          <Button>Add Student</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-10">
        <Card className="flex-1">
          <h1 className="text-2xl font-semibold text-title px-5 py-2">Attendance Sheet</h1>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Student name</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {users.map((user, index) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{user.StudentName}</Table.Cell>
                  <Table.Cell>{user.Email}</Table.Cell>
                  <Table.Cell>{user.Username}</Table.Cell>
                  <Table.Cell className="flex cursor-pointer">
                    <div className="flex gap-x-2">
                      <button>
                        <Link to={`update-student/${user.id}`}>
                          <FiEdit className="w-6 h-6 text-slate-500" />
                        </Link>
                      </button>
                      <button>
                        <BsTrash className="w-6 h-6 text-red-600" onClick={() => deleteUser(user.id)} />
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

export default Student;
