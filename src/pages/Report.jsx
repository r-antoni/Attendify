import React from "react"
import { Breadcrumb } from "flowbite-react"
import Button from "../components/reuseable/Button"

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
      <div className="bg-[#ffffff] w-full py-6 px-4 flex flex-row gap-9">
        <div className="relative">
          <p className="absolute z-10 left-2 text-slate-400">Subject</p>
          <select name="subject" id="subject" className=" border-2 border-slate-300 px-6 py-5 rounded w-40">
            <option value="1">Advance java</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </div>
        <div className="relative">
          <p className="absolute z-10 left-2 text-slate-400">Section</p>
          <select name="section" id="subject" className=" border-2 border-slate-300 px-6 py-5 rounded w-40">
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
          </select>
        </div>
        <div className="relative">
          <p className="absolute z-10 left-2 text-slate-400 ">Month</p>
          <select name="month" id="subject" className=" border-2 border-slate-300 px-6 py-5 rounded w-40">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
          </select>
        </div>
        <div className="relative">
          <p className="absolute z-10 left-2 text-slate-400 ">year</p>
          <select name="years" id="subject" className=" border-2 border-slate-300 px-6 py-5 rounded w-40">
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
          </select>
        </div>
        <div className="relative mt-6">
          <Button type="submit">Generate Report</Button>
        </div>
      </div>
    </div>
  )
}

export default Report;
