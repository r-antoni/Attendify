import React from 'react'
import Report from "../assets/img/report.svg"
import Remote from "../assets/img/remote.svg"
import Real from "../assets/img/real.svg"
import Timesheet from "../assets/img/sheet.svg"

const Features = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center text-title mt-40'>
        <h3 className='text-2xl font-bold'>Attendify Features</h3>
        <p className='py-2 tracking-widest'>Efficiently manage everything on the go.</p>
    </div>
    <div className='grid-cols-2 grid gap-x-60 gap-y-20 items-center py-10 mx-auto text-title font-medium'>
        <div className='flex flex-col items-center gap-5 w-60 h-80'>
            <h4>Remote Submission</h4>
            <img src={Remote} alt="Remote logo" className='w-60 h-56'/>
            <p></p>
        </div>
        <div className='flex flex-col items-center gap-5 w-60 h-80'>
            <h4>Online Timesheet</h4>
            <img src={Timesheet} alt="Timesheet logo" className='w-60 h-80'/>
            <p></p>
        </div>
        <div className='flex flex-col items-center gap-5 w-60 h-80'>
            <h4>Absence Report</h4>
            <img src={Report} alt="Report logo" className='w-60 h-80'/>
            <p></p>
        </div>
        <div className='flex flex-col items-center gap-5 w-60 h-80'>
            <h4>Real Time Data</h4>
            <img src={Real} alt="Real time logo" className='w-60 h-72'/>
            <p></p>
        </div>
    </div>
    </>
    
  )
}

export default Features