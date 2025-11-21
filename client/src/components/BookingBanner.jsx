import React from 'react'
import { Link } from "react-router-dom";

const BookingBanner = () => {
  return (
    <div className='bg-banner/70 poppins-medium text-xl text-white h-40 '>
        <div className='flex justify-between items-center  h-full  mx-5 md:mx-96'>
          <p className='text-primary'>Book an Appointment</p>
          <Link to="/booking">
            <button className='bg-primary  text-white  px-4 py-2 md:px-10 md:py-4 rounded-3xl hover:bg-secondary hover:text-primary duration-300'>
              Schedule Now
            </button>
          </Link>
        </div>
    </div>
  )
}

export default BookingBanner