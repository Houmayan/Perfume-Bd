import React from "react";
import ck from "../assets/brandImage/ck.svg";
import armani from "../assets/brandImage/armani.svg";
import chanel from "../assets/brandImage/channel.svg";
import dior from "../assets/brandImage/dior.svg";
import boss from "../assets/brandImage/boss.svg";
import mont from "../assets/brandImage/mont.svg";
import dolce from "../assets/brandImage/dolce.svg";
import bvlgari from "../assets/brandImage/bvlgari.svg";
import gucci from "../assets/brandImage/gucci.svg";
import versace1 from "../assets/brandImage/versace1.svg";
import versace2 from "../assets/brandImage/versace2.svg";
const BrandNames = () => {
  return (
    <div className="text-center mt-24">
      {/* Title and Slogan */}
      <div className="brands-name">
        <h1 className="font-merienda text-6xl">Scented Elegance</h1>
        <p className="font-rightous mt-3">
          Dive into Luxury with Our Top-Notch Perfume Collection!
        </p>
      </div>
      {/* logos */}
      <div>
      
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Who's using Float UI?
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum efficitur tortor in laoreet.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-5 justify-center mx-auto items-center">

                        {/* LOGO 1 */}
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center"  src={ck} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={armani} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={dior} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={chanel} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={boss} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={mont} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={dolce} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg flex-col items-center bg-[#efe2d2] h-28 w-56">
                        <img className="w-12 mx-auto" src={versace1} alt="" />
                        <img className="" src={versace2} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={bvlgari} alt="" />
                      </li>
                      <li className="flex p-10 rounded-lg bg-[#efe2d2] h-28 w-56">
                        <img className="mx-auto items-center" src={gucci} alt="" />
                      </li>

                       

                    </ul>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BrandNames;