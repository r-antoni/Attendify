import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";

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
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Teacher</h2>
        <Breadcrumb model={model} />
      </div>
      <div>
        <Card className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-2xl w-full flex justify-center text-title">Add a teacher</h1>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <InputText name="fullname" label="Fullname" type="text" placeholder="full name" />
            <div className="flex w-1/2 justify-center gap-5">
              <InputText name="username" label="Username" type="text" placeholder="Username" />
              <InputText name="password" label="Password" type="password" placeholder="Password" />
            </div>
            <InputText name="email" label="Email" type="email" placeholder="Email" />
            <InputText name="address" label="Addresss" type="text" placeholder="Address" />
            <div className="flex gap-5">
              <Button type="submit">
                <Link to="/teachers">Submit</Link>
              </Button>
              <Button color="bg-slate-400" type="reset">
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherAdd;
