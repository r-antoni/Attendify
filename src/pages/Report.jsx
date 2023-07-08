import { Breadcrumb } from "flowbite-react"
import Button from "../components/reuseable/Button"
import SelectOption from "../components/reuseable/SelectOption"

const Report = () => {
  return (
    <div className="">
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Report</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Analyze</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Report</Breadcrumb.Item>
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
          title="Month"
          option1="Jan"
          option2="Feb"
          option3="March"
        />
        <SelectOption
          title="year"
          option1="2023"
          option2="2022"
          option3="2024"
        />
        <div className="relative mt-6">
          <Button type="submit">Generate Report</Button>
        </div>
      </div>
    </div>
  )
}

export default Report;
