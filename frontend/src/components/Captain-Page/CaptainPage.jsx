// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import JoinContent from '../JoinContent/JoinContent';

// function PointsExplanation() {
//   return (
//     <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-5xl font-semibold leading-none max-w-[1121px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
//       <div className="flex flex-wrap gap-10 max-md:text-4xl">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/29531e18bf8ab6f4c8593c90bef8b50ccc4bb18c063692cd238411db0814f865?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//           className="object-contain shrink-0 w-20 aspect-square"
//           alt=""
//         />
//         <div className="flex-auto my-auto text-[#c5c5c5] max-md:text-4xl">2X (Double) Point</div>
//       </div>
//       <div className="flex gap-10 max-md:text-4xl">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/a03f879cea2db27a119b1459e3a83bf5cf89542ac5eceb724ac01c59cc62b99f?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//           className="object-contain shrink-0 w-20 aspect-square"
//           alt=""
//         />
//         <div className="my-auto text-[#c5c5c5] basis-auto max-md:text-4xl">1.5X Point</div>
//       </div>
//     </div>
//   );
// }

// function Header () {
//   return (
//       <>     
//     <div className="flex flex-wrap gap-8  justify-between self-center mt-20 ml-14  w-full text-2xl font-semibold leading-loose text-white max-w-[1020px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
//       <div className="whitespace-nowrap">Stock-Name</div>
//       <div>Points</div>
//       <div className="flex gap-20">
//         <div>C BY</div>
//         <div>VC BY</div>
//       </div>
//     </div>
//       </>
//   )
// }


// function PlayerCard({ name, points, borderColor, isCaptain, isViceCaptain, onSelect }) {
//   return (
//     <div className={`flex flex-wrap gap-5 justify-between items-center px-8 py-3 mt-6 w-full rounded-lg bg-zinc-800 border-l-[7px] max-md:px-5 max-md:max-w-full ${borderColor}`}>
//       <div className="flex gap-10 self-stretch my-auto text-2xl font-bold leading-loose">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//           className="object-contain shrink-0 aspect-square w-[60px]"
//           alt=""
//         />
//         <div className="self-start text-white basis-auto">{name}</div>
//       </div>
//       <div className="self-stretch my-auto text-4xl font-semibold leading-none">
//         {points} Pts
//       </div>
//       <div className="flex gap-10 self-stretch text-5xl leading-none whitespace-nowrap max-md:text-4xl">
//         <div
//           className={`w-20 h-20 flex items-center justify-center border-2 border-[#bebebe] rounded-full cursor-pointer ${isCaptain ? 'bg-[#d9d9d9] opacity-80' : ''}`}
//           onClick={() => onSelect('C')}
//         >
//           <span className="text-5xl font-bold text-[#4d4d4d]">C</span>
//         </div>
//         <div
//           className={`w-20 h-20 flex items-center justify-center border-2 border-[#bebebe] rounded-full cursor-pointer ${isViceCaptain ? 'bg-[#d9d9d9] opacity-80' : ''}`}
//           onClick={() => onSelect('VC')}
//         >
//           <span className="text-5xl font-bold text-[#4d4d4d]">VC</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CaptainPage() {
//   const [captain, setCaptain] = useState(null);
//   const [viceCaptain, setViceCaptain] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);


//   const playerData = [
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-red-500" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-red-500" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-red-500" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-red-500" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-[#3FD68C]" },
//     { name: "Reliance Industries", points: 0, borderColor: "border-red-500" },

//   ];
//   const handleSelect = (index, role) => {
//     if (role === 'C') {
//       setCaptain(index === captain ? null : index);
//     } else if (role === 'VC') {
//       setViceCaptain(index === viceCaptain ? null : index);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex overflow-hidden flex-col items-center px-20 pt-10 pb-20 text-white bg-black max-md:px-5 max-md:pt-24">
//         <h1 className="text-2xl text-[#c5c5c5] font-semibold leading-loose max-md:max-w-full">
//           Choose Your Captain and Vice-Captain
//         </h1>

//         <PointsExplanation />
        
//         <Header />

//         <div className="flex flex-col self-stretch px-5 py-6 mt-6 w-full rounded-xl bg-zinc-900 max-md:max-w-full">
//           {playerData.map((player, index) => (
//             <PlayerCard
//               key={index}
//               {...player}
//               isCaptain={captain === index}
//               isViceCaptain={viceCaptain === index}
//               onSelect={(role) => handleSelect(index, role)}
//             />
//           ))}
//         </div>

//          <div className='flex justify-center'>
         
//           <button onClick={() => setIsOpen(true)} className="px-14 py-1.5 mt-14 max-w-full text-5xl font-bold text-white whitespace-nowrap bg-emerald-400 rounded-[30px] w-[246px] max-md:px-5 max-md:mt-10 max-md:text-4xl hover:bg-emerald-500 transition">
//              JOIN
//           </button>

//         {isOpen && <JoinContent setIsOpen={setIsOpen} />}


//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default CaptainPage;


import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import JoinContent from '../JoinContent/JoinContent';


const CaptainPage = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [captain, setCaptain] = useState(null);
  const [viceCaptain, setViceCaptain] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedStocks = JSON.parse(localStorage.getItem("selectedStocks")) || [];
    setSelectedStocks(storedStocks);
  }, []);

  // Function to toggle Captain (C)
const handleSelectCaptain = (index) => {
  if (captain === index) {
    setCaptain(null);
    localStorage.removeItem("captain"); // Remove from localStorage
  } else {
    setCaptain(index);
    localStorage.setItem("captain", JSON.stringify(selectedStocks[index]));
  }
};

// Function to toggle Vice-Captain (VC)
const handleSelectViceCaptain = (index) => {
  if (viceCaptain === index) {
    setViceCaptain(null);
    localStorage.removeItem("viceCaptain"); // Remove from localStorage
  } else {
    setViceCaptain(index);
    localStorage.setItem("viceCaptain", JSON.stringify(selectedStocks[index]));
  }
};


  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-6 py-10 bg-black min-h-screen">
        <h2 className="text-white text-2xl font-bold mb-4">Choose Your Captain and Vice-Captain</h2>

        <div className="w-[1130px] bg-zinc-900 p-6 rounded-xl shadow-md">
          <div className="flex justify-between text-white text-lg mb-3">
            <span><strong>C</strong>: 2X (Double) Points</span>
            <span><strong>VC</strong>: 1.5X Points</span>
          </div>

          <div className="bg-black rounded-lg p-4">
            {selectedStocks.length > 0 ? (
              selectedStocks.map((stock, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 mb-3 rounded-lg border-l-4 ${
                    stock.type === "buy" ? "border-[#80db66]" : "border-[#f44336]"
                  } bg-zinc-800 text-white`}
                >
                  <div className="flex items-center gap-3">
                    <img src={stock.image} alt={stock.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="text-lg font-bold">{stock.name}</h3>
                      <p className="text-sm text-gray-400">{stock.sector}</p>
                    </div>
                  </div>
                  <div className="text-lg font-bold">
                    {captain === index && viceCaptain === index
                      ? "C & VC (2X & 1.5X)"
                      : captain === index
                      ? "C (2X)"
                      : viceCaptain === index
                      ? "VC (1.5X)"
                      : "0 Pts"}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      className={`px-4 py-2 rounded-lg ${
                        captain === index ? "bg-green-500" : "bg-gray-700"
                      }`} 
                      onClick={() => handleSelectCaptain(index)}
                    >
                      C
                    </button>
                    <button 
                      className={`px-4 py-2 rounded-lg ${
                        viceCaptain === index ? "bg-red-500" : "bg-gray-700"
                      }`} 
                      onClick={() => handleSelectViceCaptain(index)}
                    >
                      VC
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center">No stocks selected</p>
            )}
          </div>

          <div className="mt-4 flex justify-center">
            <button onClick={() => setIsOpen(true)}
              className="px-16 py-3 text-2xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all"
              disabled={captain === null || viceCaptain === null} // Disable if C/VC is not selected
            >
              Join
            </button>
            {isOpen && <JoinContent setIsOpen={setIsOpen} />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CaptainPage;
