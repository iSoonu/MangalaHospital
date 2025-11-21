import React from 'react'
import DoctorCard from './DoctorCard'

const DoctorGrid = () => {
  return (
    <div className='py-2 bg-primary/10'>
        <h2 className="text-4xl poppins-semibold text-center my-16 text-primary">Our Doctors</h2>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mx-5  mb-16 '>
         <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />

       </div>
    </div>
  )
}

export default DoctorGrid