import {Card} from "flowbite-react";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const SubjectUpdate = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Subjects",
      path: "/subjects",
    },
    {
      title: "Update Subject",
      path: "/subjects/update-subject",
    },
  ];

  const [SubjectName, setSubjectName] = useState("");
  const [Course, setCourse] = useState("");
  const [Semester, setSemester] = useState("");
  const [TeacherName, setTeacherName] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSubjectById();
  }, []);

  const updateSubject = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5010/subjects/${id}`, {
        SubjectName,
        Course,
        Semester,
        TeacherName,
      });
      navigate("/subjects");
    } catch (error) {
      console.log(error);
    }
  };

  const getSubjectById = async () => {
    const response = await axios.get(`http://localhost:5010/subjects/${id}`);
    setSubjectName(response.data.SubjectName);
    setCourse(response.data.Course);
    setSemester(response.data.Semester);
    setTeacherName(response.data.TeacherName);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Subject</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Edit Subject</h1>
          <form onSubmit={updateSubject}>
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <label htmlFor="">Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  value={SubjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                />
              </div>
              <label htmlFor="">Course</label>
              <div>
                <input
                  type="text"
                  placeholder="Course"
                  className="input"
                  value={Course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <label htmlFor="">Semester</label>
              <div>
                <input
                  type="text"
                  placeholder="Semester"
                  className="input"
                  value={Semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
              <label htmlFor="">Teacher Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  value={TeacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
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

export default SubjectUpdate;
