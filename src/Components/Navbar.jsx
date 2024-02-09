import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

import percenctSvg from "../assets/authentic-icon.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mt-3 p-3">
      {/* Information Nav */}
      <div className="hidden sm:flex justify-between md:flex-row flex-col">
        <div className=" flex gap-3 md:flex-row flex-col">
          {/* left side mail */}
          <div className="flex items-center  gap-1">
            <MdEmail color="black" />
            <h1 className="font-roboto text-base font-normal text-[#1A120B]">
              support@perfumebd.shop
            </h1>
          </div>

          <div className="flex gap-1 items-center">
            <IoIosCall />
            <p className="font-roboto text-base font-normal text-[#1A120B]">
              <span>Hotline:</span> 01857-212980
            </p>
          </div>
          {/* mid */}
        </div>

        <div className="flex gap-1">
          <img src={percenctSvg} alt="" />
          <h3 className="font-rightous text-[#3C2A21] font-semibold text-base">
            100% AUTHENTIC
          </h3>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* <h4>Store Location</h4> */}
          <NavLink>
            <h1 className="text-[#1A120B] font-roboto">Store Location</h1>
          </NavLink>
          <div className="h-4 w-[2px] bg-black"></div>
          <NavLink>
            <h1 className="text-[#1A120B] font-roboto">Contact Us</h1>
          </NavLink>
          <FaYoutube size={25} />
          <FaLinkedin size={25} />
          <RiInstagramFill size={25} />
          <FaFacebook size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
