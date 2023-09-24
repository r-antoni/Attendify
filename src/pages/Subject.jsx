import {Card, Table} from "flowbite-react";
import {GiCheckMark} from "react-icons/gi";
import {HiXMark} from "react-icons/hi2";
import {Link} from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import subject from "../assets/json/subject.json";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {BsTrash} from "react-icons/bs";
import {FiEdit} from "react-icons/fi";

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

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:5010/subjects`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5010/subjects/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

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
              {users.map((user, index) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{user.SubjectName}</Table.Cell>
                  <Table.Cell>{user.Course}</Table.Cell>
                  <Table.Cell>{user.Semester}</Table.Cell>
                  <Table.Cell>{user.TeacherName}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <button>
                      <Link to={`update-subject/${user.id}`}>
                        <FiEdit className="w-6 h-6 text-slate-500" />
                      </Link>
                    </button>
                    <button>
                      <BsTrash className="w-6 h-6 text-red-600" onClick={() => deleteUser(user.id)} />
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
