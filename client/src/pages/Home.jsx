import React from "react";
import CustomLayout from "../layouts/CustomLayout";
import Footer from "../components/Footer";
import DoctorGrid from "../components/DoctorGrid";
import SpecialtiesGrid from "../components/SpecialtiesGrid";
import BookingBanner from "../components/BookingBanner";
import CustomHero from "./herosections/CustomHero";

const title = "Your Health, Our Priority";
const subTitle = "Connecting You with Trusted Medical Professionals for Quality Care";

const Home = () => {
  return (
    <div>
      <CustomLayout bgUrl={import.meta.env.VITE_HOMEHERO_BG}>
        <CustomHero title={title} subtitle={subTitle}/>
      </CustomLayout>
      <DoctorGrid />
      <SpecialtiesGrid />
      <BookingBanner />
      <Footer />
    </div>
  );
};
export default Home;
