"use client";
import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 22,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              clearInterval(timer);
              return prevTime;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <time className="text-stone-300">
      Ends in {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
    </time>
  );
};