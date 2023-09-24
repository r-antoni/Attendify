import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TeacherAdd = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Teachers",
      path: "/teachers",
    },
    {
      title: "Add Teacher",
      path: "/add-teacher",
    },
  ];

  const [TeacherName, setTeacherName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/teachers`, {
        TeacherName,
        Email,
        Address,
        Username,
        Password,
      });
      navigate("/teachers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Teacher</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Add a teacher</h1>
          <form onSubmit={saveUser}>
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <label htmlFor="">Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  value={TeacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </div>
              <label htmlFor="">Email</label>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label htmlFor="">Username</label>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <label htmlFor="">Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <label htmlFor="">Address</label>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="input"
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

export default TeacherAdd;
