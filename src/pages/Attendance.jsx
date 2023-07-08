import { Breadcrumb } from "flowbite-react"
import SelectOption from "../components/reuseable/SelectOption";
import Button from "../components/reuseable/Button";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <div className="">
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Attendance</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Track</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="bg-[#ffffff] w-full py-6 px-4 flex flex-row gap-9 rounded-sm">
        <SelectOption
          title="Subject"
          option1="Advance Java"
          option2="A"
          option3="B"
        />
        <SelectOption
          title="Section"
          option1="A"
          option2="B"
          option3="C"
        />
        <SelectOption
          title="Date"
          option1="2023/03/15"
          option2="2023/03/16"
          option3="2023/03/17"
        />
        <Link className="text-secondary" to="/attendance-sheet">
          <div className="relative mt-6">
            <Button type="submit">Generate Sheet </Button>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default Attendance;
