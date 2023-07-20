import React from "react";
import {Breadcrumb, Card, Table} from "flowbite-react";
import absence from "../assets/json/absence.json";
const Absence = () => {
  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Absence</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Analyse</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Absence</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <Card className="flex-1">
          <h1 className="text-2xl font-semibold text-title">Absence record</h1>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Semester</Table.HeadCell>
              <Table.HeadCell>Absence reason</Table.HeadCell>
              <Table.HeadCell>Absence for</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {absence.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.no}</Table.Cell>
                  <Table.Cell>{data.student_name}</Table.Cell>
                  <Table.Cell>{data.course}</Table.Cell>
                  <Table.Cell>{data.semester}</Table.Cell>
                  <Table.Cell>{data.absence_reason}</Table.Cell>
                  <Table.Cell>{data.absence_for}</Table.Cell>
                  <Table.Cell>{data.action}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Table className="!w-full">
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Student Name</Table.HeadCell>
              <Table.HeadCell>Course</Table.HeadCell>
              <Table.HeadCell>Semester</Table.HeadCell>
              <Table.HeadCell>Absence reason</Table.HeadCell>
              <Table.HeadCell>Absence for</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {absence.map((data, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{data.no}</Table.Cell>
                  <Table.Cell>{data.student_name}</Table.Cell>
                  <Table.Cell>{data.course}</Table.Cell>
                  <Table.Cell>{data.semester}</Table.Cell>
                  <Table.Cell>{data.absence_reason}</Table.Cell>
                  <Table.Cell>{data.absence_for}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default Absence;
