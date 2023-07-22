import { Card } from "flowbite-react";
import InputText from "../components/InputText";
import Button from "../components/Button";
import Breadcrumb from "../components/Breadcrumb";

const SubjectAdd = () => {
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
      title: "Add Subject",
      path: "/add-subject",
    },
  ];

  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Subject</h2>
        <Breadcrumb model={model} />
      </div>
      <div className="w-1/2">
        <Card>
          <form className="px-5 w-full flex flex-col gap-5">
            <h3 className="text-3xl text-title">Add a Subject</h3>
            <InputText name="Subject name" label="Subject name" type="text" />
            <InputText name="Subject code" label="Subject Code" type="text" />
            <InputText name="Course" label="Course" type="text" />
            <InputText name="Teacher" label="Teacher" type="text" />
            <div className="flex flex-row gap-4">
              <Button>Submit</Button>
              <Button color="bg-slate-400">Reset</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SubjectAdd;
