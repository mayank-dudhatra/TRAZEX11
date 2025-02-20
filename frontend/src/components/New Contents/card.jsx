"use client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';
import { EventHeader } from './EventHeader';
import { EventDate } from './EventDate';
import { EventFooter } from './EventFooter';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const EventCard = () => {
  return (
    <>
   <Navbar />

  <div className="flex justify-center mt-16 min-h-screen"> 
    <div className="flex flex-col items-center pt-3 w-[1291px] h-[215px] justify-center rounded-lg bg-stone-900 max-md:max-w-full">
      <EventHeader />
      <hr className="mt-1.5 w-full min-h-0 border border-white border-solid max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between self-center items-center mt-6 w-full font-bold max-w-[1227px] max-md:max-w-full">
        <EventDate />
        <div className="flex flex-wrap gap-[350px] text-2xl items-center justify-center leading-loose max-md:max-w-full">
          <CountdownTimer />
       <Link to = "/contentsdeatils"> <button className="px-5 py-1 text-white bg-emerald-400 rounded-lg">  
            GO &gt;&gt;
          </button> </Link>
        </div>
      </div>
      <EventFooter />
    </div>
  </div>

  <Footer/>
</>

  );
};

export default EventCard;