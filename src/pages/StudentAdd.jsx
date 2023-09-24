import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const StudentAdd = () => {
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
      title: "Add Student",
      path: "/add-student",
    },
  ];

  const [StudentName, setStudentName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5005/students`, {
        StudentName,
        Email,
        Address,
        Username,
        Password,
      });
      navigate("/students");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Student</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Add a student</h1>
          <form onSubmit={saveUser}>
            <div className="w-full flex flex-col justify-center items-center gap-5 text-title">
              <label htmlFor="">Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input rounded-lg"
                  value={StudentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>
              <label htmlFor="">Email</label>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input rounded-lg"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Username</label>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input rounded-lg"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input rounded-lg"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label htmlFor="">Address</label>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="input rounded-lg"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-4">
                <Button type="submit">Submit</Button>
                <Button color="bg-slate-400" type="reset">
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default StudentAdd;
