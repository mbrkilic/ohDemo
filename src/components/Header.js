import React from "react";
import Contact from "./Contact";
import HeroSec from "./HeroSec";


function Header() {
  return (
    <div className="flex justify-center items-center ">
      <header>
        <div className="flex items-center justify-center bg-gray-100 border rounded-full py-2 w-64 mt-4">
          <span className="mx-auto  hover:bg-white hover:cursor-pointer rounded-full">
            <a href="/">home</a>
          </span>
          <span className="mx-auto hover:bg-white hover:cursor-pointer rounded-full">
            <a href="/profile">profile</a>
          </span>
          <span className="mx-auto hover:bg-white hover:cursor-pointer rounded-full">
            <a href="/contact">contact</a>
            

          </span>
        </div>
      </header>
      
    </div>
    
    
  );
}

export default Header;
