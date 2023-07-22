import { Card } from "flowbite-react";
import Breadcrumb from "../components/Breadcrumb";
import InputText from "../components/InputText"

const AbsentAppAdd = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Absence Record",
      path: "/absent-app",
    },
    {
      title: "Absent Application",
      path: "/form-submission",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Absent Application</h2>
        <Breadcrumb model={model} />
      </div>
      <Card>
        <form className="flex flex-col gap-5 justify-center items-center w-full">
          <h3 className="text-2xl font-semibold text-title px-5 py-2">Send Absent Application</h3>
        <div className="flex gap-10">
            <InputText label="Date" type="date" name="date" />
            <InputText label="Number of Days" type="text" name="absent-for" />
        </div>
        <div className="flex flex-col w-2/3 gap-2">
          <label htmlFor="reason">Reason</label>
          <textarea className="rounded-lg"></textarea>
        </div>
        <div className="flex gap-5">
          <button className="bg-secondary px-5 py-2 rounded-lg text-white" type="submit">Submit</button>
          <button className="bg-slate-400 px-5 py-2 rounded-lg text-white" type="reset">Reset</button>
        </div>
        </form>
      </Card>
    </div>
  );
};

export default AbsentAppAdd;
