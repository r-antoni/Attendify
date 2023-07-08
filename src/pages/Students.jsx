import React from 'react'
import { Breadcrumb, Card, Button} from 'flowbite-react'
const Student = () => {
  return (
    <div className='flex flex-col gap-1o '>
     <div classname="flex-col gap-3">
      <h2 className="text-3xl text-secondary font-medium font-serif">Students</h2>
      <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item href='#'>Students</Breadcrumb.Item>
      </Breadcrumb>
     </div>

     <div className="flex gap-10">
      <div className="flex flex-col gap-10">
        <Card>
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
          <p className="absolute z-8 left-2 text-slate-400 ">year</p>
          <select name="years" id="subject" className=" border-2 border-slate-300 px-6 py-5 rounded w-40">
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
          </select>
        </div>
        <div className="relative mx-2">
          <Button type="submit px-2 py-2">Generate Sheet</Button>
        </div>
      </div>
        </Card>
      </div>
     </div>
    </div>
  )
}

export default Student