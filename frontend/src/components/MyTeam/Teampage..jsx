import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ProfileCard = () => {
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [buyCount, setBuyCount] = useState(0);
  const [sellCount, setSellCount] = useState(0);

  useEffect(() => {
   
    const storedCaptain = localStorage.getItem("captain");
    const storedViceCaptain = localStorage.getItem("viceCaptain");

    if (storedCaptain) setCaptain(JSON.parse(storedCaptain));
    if (storedViceCaptain) setViceCaptain(JSON.parse(storedViceCaptain));

    // 🔍 Get Buy & Sell Stock Data
    const storedBuyStocks = JSON.parse(localStorage.getItem("buyStocks")) || [];
    const storedSellStocks = JSON.parse(localStorage.getItem("sellStocks")) || [];

    console.log("Buy Stocks:", storedBuyStocks);
    console.log("Sell Stocks:", storedSellStocks);

    setBuyCount(storedBuyStocks.length);
    setSellCount(storedSellStocks.length);
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex overflow-hidden flex-col items-center px-20 pt-28 bg-black pb-20 max-md:px-5 max-md:py-24 relative">
        <div className="flex relative flex-col pb-4 w-full rounded-2xl max-w-[1150px] min-h-[280px] max-md:max-w-full">
          {/* Background Image */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8180c58adbc9e969ee32cf4624bbdd53cf3b5921822df80477344cd64f4b6a?apiKey=f5294c2440c849e09806e1501d656072"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />

          {/* Profile Header */}
          <div className="flex relative flex-wrap gap-5 justify-between px-7 py-2 w-full rounded-2xl bg-black bg-opacity-40 max-md:pr-5 max-md:max-w-full">
            <div className="my-auto text-3xl font-bold text-[#c5c5c5]">
              Mayank_Dudhatra_06 (T1)
            </div>
          </div>

          {/* Stats & Company Logos */}
          <div className="flex relative flex-wrap gap-5 justify-between self-center mt-7 w-full max-w-[1031px] max-md:max-w-full">
            {/* Buy & Sell Count */}
            <div className="flex gap-10 self-start font-bold text-[#c5c5c5] whitespace-nowrap">
              <StatBox label="BUY" value={buyCount} />
              <StatBox label="SELL" value={sellCount} />
            </div>

            {/* Captain & Vice-Captain */}
            <div className="flex gap-10 text-lg font-semibold leading-5 text-center">
              {captain && <CompanyLogo name={captain.name} logoSrc={captain.image} badge="C" />}
              {viceCaptain && <CompanyLogo name={viceCaptain.name} logoSrc={viceCaptain.image} badge="VC" />}
            </div>
          </div>
        </div>
      </div>

      {/* Create Team Button */}
      <div className="flex justify-center items-center mt-5">
        <Link
          to="/Createteams"
          className="px-6 py-3 text-lg font-semibold text-white bg-[#1f1f1f] rounded-lg shadow-lg hover:bg-[#80db60] transition-all"
        >
          Create Team
        </Link>
      </div>

      <Footer />
    </>
  );
};

// Stat Box Component
const StatBox = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <div className="text-5xl text-white max-md:text-4xl">{label}</div>
      <div className="self-center text-white mt-7 text-6xl max-md:text-4xl">{value}</div>
    </div>
  );
};

// Company Logo Component
const CompanyLogo = ({ name, logoSrc, badge }) => {
  return (
    <div className="relative flex flex-col self-end mt-8">
      <div className="relative">
        <img
          loading="lazy"
          src={logoSrc}
          alt={`${name} logo`}
          className="object-contain aspect-square w-[90px]"
        />
        {/* Badge for Captain (C) or Vice-Captain (VC) */}
        {badge && (
          <div className="absolute top-0 left-0 bg-neutral-900 text-white border-[2px] border-stone-300 rounded-full h-6 w-6 flex items-center justify-center text-xs font-semibold">
            {badge}
          </div>
        )}
      </div>
      <div className="self-start mt-4">{name}</div>
    </div>
  );
};

export default ProfileCard;
