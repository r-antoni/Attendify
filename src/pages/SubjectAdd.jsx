import React from "react";
import {Breadcrumb, Card, Table} from "flowbite-react";
import InputText from "../components/reuseable/InputText";
import Button from "../components/reuseable/Button";
const SubjectAdd = () => {
  return (
    <div>
      <div className="flex-col gap-3 mb-9">
        <h2 className="text-3xl text-secondary">Subject</h2>
        <Breadcrumb>
          <Breadcrumb.Item>Manage</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Subject</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Add Subject</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="w-1/2">
        <Card>
          <h3 className="text-3xl text-title">Add a Subject</h3>
          <InputText name="Subject name" label="Subject name" type="text" />
          <InputText name="Subject code" label="Subject Code" type="text" />
          <InputText name="Course" label="Course" type="text" />
          <InputText name="Teacher" label="Teacher" type="text" />
          <div className="flex flex-row gap-4">
            <Button>Submit</Button>
            <Button>Reset</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubjectAdd;
