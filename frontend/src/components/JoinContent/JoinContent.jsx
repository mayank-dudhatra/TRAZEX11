import React from "react";
import { Link } from 'react-router-dom';

const JoinConfirmation = ({ setIsOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-[495px] h-[285px] bg-[#1A1A1A] rounded-lg shadow-lg p-6 relative text-white">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(false)} // Close the modal properly
        >
          <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739689311/qfish90qpd92qfbqucdo.png" alt="Close" className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-center mb-6">Join Confirmation</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300">Entry</span>
          <span className="flex items-center gap-1 text-lg font-medium">
            <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739692460/rxkduwzdyxozzizaanrl.png" alt="Coin" className="w-[24px] h-[24px]" /> 50
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-300 flex items-center gap-1">
            To Pay <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739690238/ecxbhssscmqlfhvfw2ik.png" alt="Info" className="w-4 h-4 text-gray-400" />
          </span>
          <span className="flex items-center gap-1 text-lg font-medium">
            <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739692460/rxkduwzdyxozzizaanrl.png" alt="Coin" className="w-[24px] h-[24px]" /> 50
          </span>
        </div>
        <Link to="/mycontest">
          <button className="w-full mt-9 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md">
            Join Contest
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinConfirmation;
