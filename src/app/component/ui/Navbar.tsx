// "use client";
// libraries imports
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
// components imports
import TechRadarLogo from "../svg/navbar/TechRadarLogo";
import FacebookIcon from "../svg/navbar/FacebookIcon";
import TwitterIcon from "../svg/navbar/TwitterIcon";
import YoutubeIcon from "../svg/navbar/YoutubeIcon";
import FlibBoard from "../svg/navbar/FlibBoard";
import SearchBar from "../svg/navbar/SearchBar";

const Navbar = () => {
  //   const [selected, setSelected] = useState<string>("");
  //   console.log("🚀 ~ Navbar ~ selected:", selected);
  const [size, setSize] = useState<number | null>(null);

  return (
    <>
      <div className="bg-[#090E21]">
        <div className="w-11/12 flex justify-between items-center m-auto">
          <div className="flex items-center h-[100px]">
            <TechRadarLogo />
            <p className="text-white ml-4 text-lg">the technology experts</p>
          </div>
          <div className="flex space-x-4">
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <FlibBoard />
            <p className="border-dashed border-b text-white">RSS</p>
            <div className="cursor-pointer">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

{
  /* <CountryFlag
      /> */
}
{
  /* setSize={setSize} */
}
