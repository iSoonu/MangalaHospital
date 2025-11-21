import React from "react";
import Footer from "../components/Footer";
import BookingBanner from "../components/BookingBanner";
import CustomLayout from "../layouts/CustomLayout";
import CustomHero from "./herosections/CustomHero";

const About = () => {
  const title = "About Us";
  const subTitle =
    "Discover Mangala Hospital: Where Compassion Meets Excellence in Healthcare.";
  return (
    <div className="bg-primary/10 ">
      <CustomLayout  bgUrl={import.meta.env.VITE_ABOUTUS_BG}>
        <CustomHero title={title} subtitle={subTitle}/>
      </CustomLayout>



      <div className="max-w-5xl mx-auto py-24 space-y-6 text-primary ">
        <h3 className="text-4xl poppins-semibold">
          <span className="text-4xl poppins-bold">About us</span> : Your Health,
          Our Priority
        </h3>
        <p className="text-lg poppins-regular leading-loose">
          At Mangala hospital, we believe that exceptional healthcare goes
          beyond treatment—it's about building a trusting relationship with
          every person who walks through our doors. For over [Number] years,
          we've been dedicated to serving the [Community/Region] area, combining
          cutting-edge medical technology with heartfelt, personalized care. We
          aren't just a hospital; we are a dedicated partner in your journey
          toward better health.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl poppins-semibold ">Our Mission</h3>
          <p className="text-lg leading-loose poppins-regular">
            To provide compassionate, high-quality healthcare that meets the
            unique needs of each patient, fostering a healthier community
            through innovation, education, and collaboration
          </p>
          <h3 className="text-xl poppins-semibold">Our Vision</h3>
          <p className="text-lg leading-loose poppins-regular">
            To be the most trusted healthcare provider in Kerala, recognized for
            our clinical excellence, revolutionary research, and unwavering
            commitment to the human experience of care
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl poppins-semibold">Patient-Centered Care</h3>
          <p className="text-lg leading-loose poppins-regular">
            We understand that a hospital stay can be stressful. That's why we
            place the patient experience at the center of everything we do.
          </p>
          <ul className="text-lg space-y-4 poppins-regular list-disc list-inside">
            <li className="leading-loose">
              <span className="text-xl poppins-medium">Compassionate Teams :</span>
              Our staff is trained to listen, communicate clearly, and treat
              every patient with dignity and respect. We focus on healing the
              whole person, not just the condition.
            </li>
            <li className="leading-loose">
              <span className="text-xl poppins-medium">
                Individualized Treatment :
              </span>{" "}
              Your health journey is unique. We collaborate across departments
              to create a personalized treatment plan tailored specifically to
              your needs, goals, and lifestyle.
            </li> 
            <li className="leading-loose">
              <span className="text-xl poppins-medium">Family Inclusion :</span> We
              believe family and loved ones are vital to the healing process. We
              actively involve them in education and decision-making to ensure a
              supportive environment.
            </li>
          </ul>
        </div>
      </div>
      <BookingBanner />
      <Footer />
    </div>
  );
};

export default About;
