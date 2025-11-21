import React from "react";

const SpecialtiesCard = () => {
  return (
    <section className="bg-secondary flex items-center justify-center mx-auto max-w-sm">
      <div className="bg-slate  text-center  text-primary rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300">
        <div className="m-2.5">
          <img className="object-cover" src={import.meta.env.VITE_SPCL1} />
        </div>

        <div className="my-4 leading-loose">
          <h2 className="poppins-semibold">Department Name</h2>
          <p className="poppins-regular">Description</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesCard;
