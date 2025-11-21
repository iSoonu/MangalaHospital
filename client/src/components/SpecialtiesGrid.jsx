import React from "react";
import SpecialtiesCard from "./SpecialtiesCard";

const SpecialtiesGrid = () => {
  return (
    <div className="py-2 bg-primary/10">
      <h2 className="text-4xl poppins-semibold text-center my-16 text-primary">Our Specialties</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mx-5  mb-16 '>
        <SpecialtiesCard />
        <SpecialtiesCard />
        <SpecialtiesCard />
        <SpecialtiesCard />
        <SpecialtiesCard />
        <SpecialtiesCard />
      </div>
    </div>
  );
};

export default SpecialtiesGrid;
