import {Card} from "flowbite-react";
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
      path: "/teacher",
    },
    {
      title: "Add Teacher",
      path: "/add-teacher"
    }
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="flex-col gap-3">
        <h2 className="text-3xl text-secondary">Teacher</h2>
        <Breadcrumb model={model}/>
      </div>
      <div className="w-[50%]">
        <Card>
          <h1 className="font-semibold text-2xl text-title">Add a teacher</h1>
          <InputText name="fullname" label="Full name" type="text" placeholder="full name" />
          <div className="flex w-full gap-x-10">
            <div className="w-[50%]">
              <InputText name="username" label="Username" type="text" placeholder="Username" />
            </div>
            <div className="w-[50%]">
              <InputText name="password" label="Password" type="password" placeholder="Password" />
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <InputText name="email" label="Email" type="text" placeholder="Email" />
            <InputText name="address" label="Addresss" type="text" placeholder="Address" />
          </div>
          <div className="flex gap-5">
            <Button>Submit</Button>
            <Button>Reset</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherAdd;
