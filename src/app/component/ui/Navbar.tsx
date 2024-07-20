"use client";
// libraries imports
import ReactFlagsSelect from "react-flags-select";
import React, { useEffect, useState } from "react";
// components imports
import TechRadarLogo from "../svg/navbar/TechRadarLogo";
import FacebookIcon from "../svg/navbar/FacebookIcon";
import TwitterIcon from "../svg/navbar/TwitterIcon";
import YoutubeIcon from "../svg/navbar/YoutubeIcon";
import FlibBoard from "../svg/navbar/FlibBoard";
import SearchBar from "../svg/navbar/SearchBar";

const Navbar = () => {
  const [size, setSize] = useState<number | null>(null);

  //   console.log("🚀 ~ Navbar ~ result:", result);

  return (
    <>
      <div className="bg-[#090E21]">
        <div className="w-11/12 flex justify-between items-center m-auto">
          <div className="flex items-center h-[100px]">
            <TechRadarLogo />
            <p className="text-[#FFF] ml-2 text-lg mt-6">
              the technology experts
            </p>
          </div>
          <div className="flex space-x-4">
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <FlibBoard />
            <p className="border-dashed border-b text-white text-[13px]">RSS</p>
            <div className="cursor-pointer">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
  console.log("🚀 ~ Navbar ~ number:", number)
  console.log("🚀 ~ Navbar ~ number:", number)
  console.log("🚀 ~ Navbar ~ number:", number)
  console.log("🚀 ~ Navbar ~ number:", number)

export default Navbar;
