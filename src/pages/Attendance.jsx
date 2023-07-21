import { Card, Table } from "flowbite-react";
import SelectOption from "../components/SelectOption";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../reducers/AttendanceSlice";
import Breadcrumb from "../components/Breadcrumb";

const Attendance = () => {
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
      title: "Attendance",
      path: "/attendance",
    },
  ];

  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Attendance</h2>
        <Breadcrumb model={model} />
      </div>
      <div className="flex flex-col gap-10">
        <Card className="pb-3">
          <form onSubmit={handleSubmit} className="flex flex-row items-center gap-10 ml-10 mt-8">
            <SelectOption title="Subject" option1="Advance Java" option2="A" option3="B" />
            <SelectOption title="Section" option1="A" option2="B" option3="C" />
            <SelectOption title="Date" option1="2023/03/15" option2="2023/03/16" option3="2023/03/17" />
            <div className="">
              <Button type="submit">{pending ? "Loading" : "Generate Sheet"}</Button>
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
                <Table.HeadCell>Course</Table.HeadCell>
                <Table.HeadCell>Smester</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                {items.map((data, i) => (
                  <Table.Row key={i}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>{data.student_name}</Table.Cell>
                    <Table.Cell>{data.course}</Table.Cell>
                    <Table.Cell>{data.smester}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
