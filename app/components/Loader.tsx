import React from "react";
import { BarLoader } from 'react-spinners'

const Loader = () => {
  return (
<div className="flex justify-center items-center h-screen transition-opacity duration-300 ease-in-out md:flex md:justify-center md:items-center md:h-screen">      
      <BarLoader color="rgba(0, 0, 0, 1)" />
    </div>
  );
};

export default Loader;  