import {Card} from "flowbite-react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import InputText from "../components/InputText";

const TeacherAdd = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Teachers",
      path: "/teacher",
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
          <h3 className="font-semibold text-2xl w-full flex justify-center text-title">Add a teacher</h3>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <InputText name="fullname" label="Fullname" type="text" placeholder="full name" />
            <div className="flex w-[48%] justify-center gap-8">
              <InputText name="username" label="Username" type="text" placeholder="Username" />
              <InputText name="password" label="Password" type="password" placeholder="Password" />
            </div>
            <InputText name="email" label="Email" type="email" placeholder="Email" />
            <InputText name="address" label="Addresss" type="text" placeholder="Address" />
            <div className="flex gap-5">
              <Button>Submit</Button>
              <Button color="bg-slate-400">Reset</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherAdd;
