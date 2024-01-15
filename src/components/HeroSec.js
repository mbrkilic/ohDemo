import React from "react";

function HeroSec() {
  return (
    <>
      <div className="w-full flex mt-16 justify-center items-center m-4">
        <h1 className=" text-center text-6xl font-bold mb-4">
          A brand and product <br /> designer working with <br />
          clients globally
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <p className="mr-2">Expertise</p>
        <p className="mr-2 bg-gray-200 rounded-full py-2 px-4">Branding</p>
        <p className="mr-2 bg-gray-200 rounded-full py-2 px-4">Product</p>
        <p className="mr-2 bg-gray-200 rounded-full py-2 px-4">Design Systems</p>
      </div>
    </>
  );
}

export default HeroSec;
