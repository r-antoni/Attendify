import {Card} from "flowbite-react";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import Breadcrumb from "../components/Breadcrumb";

const Report = () => {
  const model = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Report",
      path: "/report",
    },
  ];
  return (
    <div className="">
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Report</h2>
        <Breadcrumb model={model}/>
      </div>
      <Card className="pb-3">
        <form className="flex flex-row items-center gap-20 ml-20 mt-8">
          <SelectOption title="Subject" option1="Advance Java" option2="A" option3="B" />
          <SelectOption title="Section" option1="A" option2="B" option3="C" />
          <SelectOption title="Month" option1="Jan" option2="Feb" option3="March" />
          <SelectOption title="Year" option1="2023" option2="2022" option3="2024" />
          <div className="">
            <Button type="submit">Generate Report</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Report;
