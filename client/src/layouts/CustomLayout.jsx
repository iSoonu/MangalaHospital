import React from "react";
import Nav from "../components/Nav";

const CustomLayout = ({ children, bgUrl }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgUrl}')` }}
    >
      <Nav />
      {children}
    </div>
  );
};

export default CustomLayout;
