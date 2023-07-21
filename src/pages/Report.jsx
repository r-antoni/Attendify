import {Card, Table} from "flowbite-react";
import Button from "../components/Button";
import SelectOption from "../components/SelectOption";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../reducers/ReportSlice";

const Report = () => {
  const { items, pending, active } = useSelector((state) => state.attendance);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getItems());
  };
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
    <>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Report</h2>
        <Breadcrumb model={model}/>
      </div>
      <div className="flex flex-col gap-10">
        <Card className="pb-3">
        <form className="flex flex-row items-center gap-10 ml-10 mt-8" onSubmit={handleSubmit}>
          <SelectOption title="Subject" option1="Advance Java" option2="A" option3="B" />
          <SelectOption title="Section" option1="A" option2="B" option3="C" />
          <SelectOption title="Month" option1="Jan" option2="Feb" option3="March" />
          <SelectOption title="Year" option1="2023" option2="2022" option3="2024" />
          <div className="">
          <Button type="submit">{pending ? "Loading" : "Generate Report"}</Button>
          </div>
        </form>
      </Card>
      <Card className={active ? "flex" : "hidden"}>
          <h1 className="text-2xl px-5 py-2 font-semibold text-title">Attendance Sheet</h1>
          <div className="max-h-[500px] overflow-y-scroll">
            <Table className="!w-full">
              <Table.Head>
                <Table.HeadCell>No</Table.HeadCell>
                <Table.HeadCell>Student Name</Table.HeadCell>
                <Table.HeadCell>Semester</Table.HeadCell>
                <Table.HeadCell>Total Present Day</Table.HeadCell>
                <Table.HeadCell>Total Absence Day</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {items.map((data, i) => (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.semester}</Table.Cell>
                    <Table.Cell>{data.present}</Table.Cell>
                    <Table.Cell>{data.absence}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Card>
      </div>
      
    </>
  );
};

export default Report;
