import {Card} from "flowbite-react";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const TeacherUpdate = () => {
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
      title: "Update Teacher",
      path: "/teachers/update-teacher",
    },
  ];

  const [TeacherName, setTeacherName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTeacherById();
  }, []);

  const updateTeacher = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/teachers/${id}`, {
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

  const getTeacherById = async () => {
    const response = await axios.get(`http://localhost:5000/teachers/${id}`);
    setTeacherName(response.data.TeacherName);
    setEmail(response.data.Email);
    setAddress(response.data.Address);
    setUsername(response.data.Username);
    setPassword(response.data.Password);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Teacher</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Edit Teacher</h1>
          <form onSubmit={updateTeacher}>
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

export default TeacherUpdate;
