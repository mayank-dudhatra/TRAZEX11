import React from "react";
import Navbar from "../Navbar/Navbar";

const MarketCard = ({ exchange, date, day, endTime, joinedCount }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      {/* <div className="flex justify-between items-center">
        <div className="flex gap-5 self-start ml-3 text-xl font-semibold whitespace-nowrap text-stone-300 max-md:ml-2.5">
          <div className=""> <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738904644/nbbzv6vdg9mitp2mque8.png" alt="NSE Logo" /> </div>
          <span className="text-white font-medium">{exchange}</span>
        </div>
      </div> */}

       <header className="flex gap-5 self-start ml-3 text-xl font-semibold whitespace-nowrap text-stone-300 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738904644/nbbzv6vdg9mitp2mque8.png"
          className="object-contain shrink-0 w-7 aspect-square"
          alt="NSE Logo"
        />
        <h1 className="my-auto">NSE</h1>
      </header>

      <div className="flex justify-between items-center mt-3">
        {/* <div className="flex items-center space-x-3">
          <span className="text-white text-2xl font-bold">{date}</span>
          <span className="text-gray-400 uppercase">{day}</span>
        </div> */}

       <div className="flex  gap-10 self-start mt-1.5">
        <time className="text-5xl leading-none text-white basis-auto max-md:text-4xl">
          5 JAN
        </time>
        <span className="text-2xl leading-loose text-neutral-400">
          WED
        </span>
      </div>

        <div className="flex items-center  space-x-3">
          {/* <span className="text-gray-300">Ends in {endTime}</span> */}
          <time className="text-stone-300">
          Ends in {endTime}
          </time>

          <button className="bg-emerald-500 text-white px-4 py-1 rounded hover:bg-emerald-600 transition-colors">
            GO &gt;&gt;
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">🏆</span>
          <span className="text-gray-400">{joinedCount} Joined</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <span>🔔</span>
          <span>Get Notified</span>
        </div>
      </div>
    </div>
  );
};

const MarketCards = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-4">
        <MarketCard
          exchange="NSE"
          date="5 JAN"
          day="WED"
          endTime="4H : 22M : 32S"
          joinedCount={29}
        />
        <MarketCard
          exchange="BSE"
          date="5 JAN"
          day="WED"
          endTime="4H : 22M : 32S"
          joinedCount={29}
        />
      </div>
    </>
  );
};

export default MarketCards;




// MarketCards2 component
export const MarketCards2 = () => {
  const marketData = [
    {
      exchange: "NSE",
      date: "5 JAN",
      day: "WED",
      endTime: "4H : 22M : 32S",
      joinedCount: 29,
    },
    {
      exchange: "BSE",
      date: "5 JAN",
      day: "WED",
      endTime: "4H : 22M : 32S",
      joinedCount: 29,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {marketData.map((market, index) => (
        <MarketCard key={index} {...market} />
      ))}
    </div>
  );
};

