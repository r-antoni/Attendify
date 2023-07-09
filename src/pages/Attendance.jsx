import { Breadcrumb, Card, Table } from "flowbite-react"
import SelectOption from "../components/reuseable/SelectOption";
import Button from "../components/reuseable/Button";
import absenceData from "../assets/json/absenceRecords.json";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <div>
            <div className="flex-col gap-3 mb-9">
                <h2 className="text-3xl text-secondary">Attendance</h2>
                <Breadcrumb>
                    <Breadcrumb.Item>Track</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Attendance</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Attendance sheet</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="flex flex-col gap-10">
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
                    <div className="relative mt-6">
                        <Button type="submit">Generate Sheet</Button>
                    </div>
                </div>
                <div>
                    <Card className="flex-1">
                        <h1 className="text-2xl font-semibold text-title">Attendance Sheet</h1>
                        <Table className="!w-full">
                            <Table.Head>
                                <Table.HeadCell>Student Name</Table.HeadCell>
                                <Table.HeadCell>Course</Table.HeadCell>
                                <Table.HeadCell>Smester</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {absenceData.map((data, i) => (
                                    <Table.Row key={i}>
                                        <Table.Cell>{data.course}</Table.Cell>
                                        <Table.Cell>{data.smester}</Table.Cell>
                                        <Table.Cell>{data.student_name}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card>
                </div>
            </div>
        </div>
  )
};

export default Attendance;
