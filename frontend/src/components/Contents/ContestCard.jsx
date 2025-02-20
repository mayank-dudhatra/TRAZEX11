import React from "react";

function ContestCard({ exchange, date, day, endTime, joined }) {
  return (
    <div className="flex flex-col pt-3 mt-10 w-full rounded-lg bg-stone-900 max-w-[1291px] max-md:max-w-full">
      <div className="flex gap-5 self-start ml-3 text-xl font-semibold whitespace-nowrap text-stone-300 max-md:ml-2.5">
        <img
          loading="lazy"
          src="exchange-icon-url"
          className="object-contain shrink-0 w-7 aspect-square"
          alt=""
        />
        <div className="my-auto">{exchange}</div>
      </div>
      <div className="shrink-0 mt-1.5 h-0 border border-white border-solid max-md:max-w-full"></div>
      <div className="flex flex-wrap gap-5 justify-between self-center mt-6 w-full font-bold max-w-[1227px] max-md:max-w-full">
        <div className="flex gap-10 self-start mt-1.5">
          <div className="text-5xl leading-none text-white basis-auto max-md:text-4xl">{date}</div>
          <div className="text-2xl leading-loose text-neutral-400">{day}</div>
        </div>
        <div className="flex flex-wrap gap-10 text-2xl leading-loose max-md:max-w-full">
          <div className="text-stone-300">Ends in {endTime}</div>/
          <button className="px-5 py-1 text-white bg-emerald-400 rounded-lg">GO &gt;&gt;</button>
        </div>
      </div>
      {joined ? (
        <div className="flex overflow-hidden flex-wrap gap-5 justify-between py-1.5 pr-7 pl-20 mt-8 w-full rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
          <div className="text-xl font-medium leading-10 text-stone-300">{joined} Joined</div>
          <div className="flex gap-9 self-start text-2xl font-semibold leading-loose text-white">
            <img
              loading="lazy"
              src="notify-icon-url"
              className="object-contain shrink-0 my-auto w-7 aspect-[0.97]"
              alt=""
            />
            <div className="basis-auto">Get Notifies</div>
          </div>
        </div>
      ) : (
        <div className="flex overflow-hidden flex-wrap gap-9 px-20 py-1.5 mt-8 text-2xl leading-loose text-white rounded-lg bg-zinc-800 max-md:px-5">
          <img
            loading="lazy"
            src="notify-icon-url"
            className="object-contain shrink-0 my-auto w-7 aspect-[0.97]"
            alt=""
          />
          <div>Get Notifies</div>
        </div>
      )}
    </div>
  );
}

export default ContestCard;
