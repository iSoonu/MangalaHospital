import React from "react";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="bg-primary/10 ">
      <div className="grid md:grid-cols-4 p-10 justify-items-center text-center gap-4 text-primary font-medium">
        <div className="space-y-2">
          <h3 className="text-lg poppins-bold">Quick Links</h3>
          <ul className="space-y-2 poppins-regular">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg  text-primary poppins-bold">Contact Us</h3>
          <div className="poppins-regular space-y-2">
            <p>Near Shiva Temple</p>
            <p>Varkala,Kerala</p>
            <p>+91981001000</p>
            <p>newmangala@gmail.com</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg  poppins-bold text-primary">
            Emergency Helpline
          </h3>
          <div className="poppins-regular space-y-2">
            <p>+91199199199</p>
            <p>Open 24/7 </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg poppins-bold text-primary">Follow Us</h3>
          <ul className="space-y-2 poppins-regular ">
            <li className="flex items-center space-x-2">
              <GrInstagram /> <p>Instagram</p>
            </li>
            <li className="flex items-center space-x-2">
              <RiTwitterXLine />
              <p className="inline">Twitter</p>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebookSquare />
              <p>Facebook</p>
            </li>
            <li className="flex items-center space-x-2">
              <GrLinkedin />
              <p>Linkedin</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-6 text-primary font-medium space-y-1">
        <p className="poppins-semibold">2025 New Mangala Hospital. All rights reserved</p>
        <p className="opacity-45 poppins-regular">Designed and Developed by Soonu S</p>
      </div>
      ;
    </section>
  );
};

export default Footer;
