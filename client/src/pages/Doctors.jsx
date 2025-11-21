import React from "react";
import DoctorGrid from "../components/DoctorGrid";
import Footer from "../components/Footer";
import BookingBanner from "../components/BookingBanner";
import CustomLayout from "../layouts/CustomLayout";
import CustomHero from "./herosections/CustomHero";

const Doctors = () => {
  const title = "Our Doctors";
  const subTitle =
    "Meet the Experts Behind Mangala Hospital's Exceptional Care.";
  return (
    <div>
      <CustomLayout bgUrl={import.meta.env.VITE_DOCTORSHERO_BG}>
        <CustomHero title={title} subtitle={subTitle}/>
      </CustomLayout>

      {/* <DoctorsLayout /> */}
      <DoctorGrid />
      <BookingBanner />
      <Footer />
    </div>
  );
};

export default Doctors;
