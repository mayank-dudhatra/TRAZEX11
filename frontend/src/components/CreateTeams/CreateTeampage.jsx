// import React from "react";
// import { Link } from 'react-router-dom';
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const ScoreDisplay = () => {
//   return (
//     <div className="flex mt-[-90px] flex-col pt-4 w-full bg-customGreen rounded-lg max-md:max-w-full">
//       <div className="flex flex-wrap gap-3 self-center max-w-full text-3xl font-bold text-white whitespace-nowrap w-[697px]">
//         <p className="grow">0/11</p>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e79820028868bc1797a5331a71864c27bc53db1293a990b8a0903bdc1340f9c?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//           className="object-contain grow shrink-0 rounded-none aspect-[17.54] basis-0 w-fit max-md:max-w-full"
//           alt="Score indicator"
//         />
//       </div>
//       <section className="flex flex-col justify-center items-center px-16 py-0.5 mt-7 w-full bg-[#1F945D] rounded-lg max-md:px-5 max-md:max-w-full">
//   <div className="flex z-10 gap-5 justify-between items-center max-w-full w-[745px]">
//     <img
//       loading="lazy"
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb7d2d502c6012406338dfaea34e1c7771147a540cf2d2b601b4a70fe7843bdf?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//       className="object-contain w-[80px] h-[80px]"
//       alt="Team 1 logo"
//     />
//     <div className="flex items-center justify-center w-[60px] h-[60px] bg-red-500 rounded-full" />
//     <div className="flex items-center gap-5 text-8xl font-bold text-white">
//       <p>0</p>
//       <p>-</p>
//       <p>0</p>
//     </div>
//     <div className="flex items-center gap-5">
//       <div className="flex items-center justify-center w-[60px] h-[60px] bg-green-500 rounded-full" />
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/c57272a871be3ecb0f319ddb651d66712c9ff351bebea5ea70fe5547110401f7?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//         className="object-contain w-[80px] h-[80px]"
//         alt="Team 2 logo"
//       />
//     </div>
//   </div>
// </section>

//     </div>
//   );
// };

// const ActionButtons = () => {
//   return (
//     <nav className="flex flex-wrap gap-5 justify-between self-center mt-10 w-full text-2xl font-semibold leading-loose whitespace-nowrap max-w-[1150px] text-stone-500 max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/953fc1b1adc544157dea0b238bbf4213619fd4932ffb0fc5d17bc9b8f8727c65?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//           className="object-contain shrink-0 my-auto aspect-square w-[21px]"
//           alt="Action icon"
//         />
//         <div className="flex gap-20 items-center">
//           <div className="flex gap-2">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc664690ae91c96c39f29ecb7a5e15aee13a10eee93382d4a547a675b4a57bc4?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//               className="object-contain shrink-0 my-auto aspect-[1.29] w-[27px]"
//               alt="Sell icon"
//             />
//             <p>SELL</p>
//           </div>
//           <div className="flex gap-2 items-center">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/995c7d52292a4c0f75e0370ee0782c1bfede0c91cecd8441fa2d659467347046?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//               className="object-contain shrink-0 my-auto aspect-[1.29] w-[27px]"
//               alt="Buy icon"
//             />
//             <p>BUY</p>
//           </div>
//         </div>
//       </nav>
//   );
// };

// const StockCard = () => {
//   return (
// <article className="flex gap-5 justify-between items-center px-4 py-5 w-full rounded-lg bg-zinc-800 max-md:max-w-full">
//         <div className="flex gap-10 self-stretch text-2xl font-bold leading-loose text-white">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//             className="object-contain shrink-0 aspect-square w-[60px]"
//             alt="Company logo"
//           />
//           <h3 className="self-start basis-auto">Reliance Industries</h3>
//         </div>
//         <div className="flex gap-6 self-stretch my-auto">
//           <p className="grow text-4xl leading-none text-white">1278.20</p>
//           <div className="flex gap-2 self-start mt-3 text-xl text-red-500">
//             <p className="grow">-7.00 (-0.54%)</p>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/da344d17680806ddd91d24466cebd6a335f7ea58bfd89271bfa4cc9ce25b76f3?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//               className="object-contain shrink-0 my-auto w-3.5 aspect-square"
//               alt="Trend indicator"
//             />
//           </div>
//         </div>
//         <div className="flex gap-7 self-stretch my-auto text-3xl leading-none text-white whitespace-nowrap">
//           <button className="px-4 py-1 border-red-500 bg-red-500 rounded-lg">SELL</button>
//           <button className="px-6 py-1 border-emerald-500 bg-emerald-500 rounded-lg max-md:pl-5">BUY</button>
//         </div>
//       </article>
//   );
// };

// const StockList = () => {
//   return (
//     <section className="px-4 py-8 mt-2 w-full font-semibold rounded-xl bg-zinc-900 max-md:pr-5 max-md:max-w-full">
//     {[...Array(7)].map((_, index) => (
//       <div key={index} className={index > 0 ? "mt-5" : ""}>
//         <StockCard />
//       </div>
//     ))}
//   </section>
//   );
// };

// const CreateTeamsPage = () => {
//   return (
//     <>
//     <Navbar/>
//     <main className="flex overflow-hidden flex-col px-20 pt-36 pb-9 bg-black max-md:px-5 max-md:pt-24">
//       <ScoreDisplay />
//       <ActionButtons />
//       <StockList />

//       <div className="flex justify-center">
//        <Link to="/captainpage">
//     <button className="px-14 py-1.5 mt-14 text-5xl font-bold text-white bg-emerald-400 rounded-[30px] w-[246px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
//       NEXT
//     </button>
//        </Link>
//       </div>
//     </main>
//     <Footer />
//     </>
//   );
// };

// export default CreateTeamsPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { FaTimes } from "react-icons/fa";

// const stockList = [
//   { name: "Reliance Industries", sector: "Oil & Gas & Petrochemicals" },
//   { name: "Tata Motors", sector: "Automobile Manufacturing" },
//   { name: "HDFC Bank", sector: "Banking & Financial Services" },
//   { name: "Infosys", sector: "IT & Software Services" },
//   { name: "Bharti Airtel", sector: "Telecommunications" },
//   { name: "Asian Paints", sector: "Consumer Goods" },
//   { name: "Larsen & Toubro", sector: "Engineering & Construction" }
// ];

// const CreateTeamsPage = () => {
//   const [selectedStocks, setSelectedStocks] = useState([]);
//   const maxStocks = 11;

//   const handleBuy = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "buy" }]);
//     }
//   };

//   const handleSell = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "sell" }]);
//     }
//   };

//   const handleRemove = (index) => {
//     const updatedStocks = [...selectedStocks];
//     updatedStocks.splice(index, 1);
//     setSelectedStocks(updatedStocks);
//   };

//   const buyCount = selectedStocks.filter(stock => stock.type === "buy").length;
//   const sellCount = selectedStocks.filter(stock => stock.type === "sell").length;

//   return (
//     <>
//       <Navbar />
//       <main className="flex flex-col items-center px-6 py-10 bg-black min-h-screen">
//         {/* Selected Stocks Display */}
//         <div className="w-[1130px] p-6 bg-green-700 rounded-xl flex flex-col text-white shadow-lg">
//           <div className="flex justify-between text-lg font-bold mb-4">
//             <span>Buy: {buyCount}</span>
//             <span>Sell: {sellCount}</span>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             {selectedStocks.map((stock, index) => (
//               <div 
//                 key={index} 
//                 className={`relative p-3 rounded-lg flex items-center gap-3 ${
//                   stock.type === "buy" ? "border-2 border-green-500" : "border-2 border-red-500"
//                 }`}
//               >
//                 <img
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6"
//                   alt="Stock Logo"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-sm font-semibold">{stock.name}</p>
//                 <FaTimes 
//                   className="absolute top-0 right-0 cursor-pointer text-red-400 hover:text-red-600"
//                   onClick={() => handleRemove(index)} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stock List */}
//         <section className="w-[1130px] mt-6 bg-zinc-900 rounded-lg p-4 shadow-md">
//           {stockList.map((stock, index) => (
//             <StockCard key={index} stock={stock} handleBuy={handleBuy} handleSell={handleSell} />
//           ))}
//         </section>

//         {/* Next Button */}
//         <div className="mt-6">
//           <Link to="/captainpage">
//             <button className="px-16 py-3 text-2xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all">
//               NEXT
//             </button>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const StockCard = ({ stock, handleBuy, handleSell }) => {
//   return (
//     <article className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg text-white mt-4 w-[1100px] shadow-sm">
//       <div className="flex items-center gap-3">
//         <img
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6"
//           alt="Stock Logo"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <h3 className="text-lg font-bold">{stock.name}</h3>
//           <p className="text-sm text-gray-400">{stock.sector}</p>
//         </div>
//       </div>
//       <div className="text-lg font-bold">1278.20 <span className="text-red-500">-7.00 (-0.54%)</span></div>
//       <div className="flex gap-2">
//         <button onClick={() => handleSell(stock)} className="px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600 transition-all">SELL</button>
//         <button onClick={() => handleBuy(stock)} className="px-4 py-2 bg-green-500 text-white font-bold hover:bg-green-600 transition-all">BUY</button>
//       </div>
//     </article>
//   );
// };

// export default CreateTeamsPage;





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { FaTimes } from "react-icons/fa";

// const stockList = [
//   { name: "Reliance Industries", sector: "Oil & Gas", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6" },
//   { name: "Tata Motors", sector: "Automobile", image: "https://images.dhan.co/symbol/TATAMOTORS.png" },
//   { name: "HDFC Bank", sector: "Banking", image: "https://images.dhan.co/symbol/HDFCBANK.png" },
//   { name: "Infosys", sector: "IT Services", image: "https://images.dhan.co/symbol/INFY.png" },
//   { name: "Bharti Airtel", sector: "Telecom", image: "https://images.dhan.co/symbol/BHARTIARTL.png" },
//   { name: "Asian Paints", sector: "Paints & Chemicals", image: "https://images.dhan.co/symbol/ASIANPAINT.png" },
//   { name: "Larsen & Toubro", sector: "Construction", image: "https://images.dhan.co/symbol/LT.png" },
//   { name: "Suzlon Energy", sector: "Renewable Energy", image: "https://images.dhan.co/symbol/SUZLON.png" },
//   { name: "IRFC", sector: "Railway", image: "https://images.dhan.co/symbol/IRFC.png" },
//   { name: "Bajaj Finance", sector: "Financial", image: "https://images.dhan.co/symbol/BAJFINANCE.png" },
//   { name: "Mahindra", sector: "Automobilr", image: "https://images.dhan.co/symbol/M&M.png" },




// ];

// const CreateTeamsPage = () => {
//   const [selectedStocks, setSelectedStocks] = useState([]);
//   const maxStocks = 11;

//   const handleBuy = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "buy" }]);
//     }
//   };

//   const handleSell = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "sell" }]);
//     }
//   };

//   const handleRemove = (index) => {
//     const updatedStocks = [...selectedStocks];
//     updatedStocks.splice(index, 1);
//     setSelectedStocks(updatedStocks);
//   };

//   const buyCount = selectedStocks.filter(stock => stock.type === "buy").length;
//   const sellCount = selectedStocks.filter(stock => stock.type === "sell").length;

//   return (
//     <>
//       <Navbar />
//       <main className="flex flex-col items-center px-6 py-10 bg-black min-h-screen">
//         {/* Selected Stocks Display */}
//         <div className="w-[1130px] p-6 bg-green-700 rounded-xl flex flex-col text-white shadow-lg">
//           <div className="flex justify-between text-lg font-bold mb-4">
//             <span>Buy: {buyCount}</span>
//             <span>Sell: {sellCount}</span>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             {selectedStocks.map((stock, index) => (
//               <div 
//                 key={index} 
//                 className={`relative p-3 rounded-lg ${
//                   stock.type === "buy" ? "border-2 border-green-500" : "border-2 border-red-500"
//                 }`}
//               >
//                 <img
//                   src={stock.image}
//                   alt="Stock Logo"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <FaTimes 
//                   className="absolute top-0 right-0 cursor-pointer text-red-400 hover:text-red-600"
//                   onClick={() => handleRemove(index)} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stock List */}
//         <section className="w-[1130px] mt-6 bg-zinc-900 rounded-lg p-4 shadow-md">
//           {stockList.map((stock, index) => (
//             <StockCard key={index} stock={stock} handleBuy={handleBuy} handleSell={handleSell} />
//           ))}
//         </section>

//         {/* Next Button */}
//         <div className="mt-6">
//           <Link to="/captainpage">
//             <button className="px-16 py-3 text-2xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all">
//               NEXT
//             </button>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const StockCard = ({ stock, handleBuy, handleSell }) => {
//   return (
//     <article className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg text-white mt-4 w-[1100px] shadow-sm">
//       <div className="flex items-center gap-3">
//         <img
//           src={stock.image}
//           alt="Stock Logo"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <h3 className="text-lg font-bold">{stock.name}</h3>
//           <p className="text-sm text-gray-400">{stock.sector}</p>
//         </div>
//       </div>
//       <div className="text-lg font-bold">1278.20 <span className="text-red-500">-7.00 (-0.54%)</span></div>
//       <div className="flex gap-2">
//         <button onClick={() => handleSell(stock)} className="px-4 py-2 bg-red-500 text-white font-bold hover:bg-red-600 transition-all">SELL</button>
//         <button onClick={() => handleBuy(stock)} className="px-4 py-2 bg-green-500 text-white font-bold hover:bg-green-600 transition-all">BUY</button>
//       </div>
//     </article>
//   );
// };

// export default CreateTeamsPage;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaTimes } from "react-icons/fa";

const stockList = [
  { name: "Reliance Industries", sector: "Oil & Gas", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6" },
  { name: "Tata Motors", sector: "Automobile", image: "https://images.dhan.co/symbol/TATAMOTORS.png" },
  { name: "HDFC Bank", sector: "Banking", image: "https://images.dhan.co/symbol/HDFCBANK.png" },
  { name: "Infosys", sector: "IT Services", image: "https://images.dhan.co/symbol/INFY.png" },
  { name: "Bharti Airtel", sector: "Telecom", image: "https://images.dhan.co/symbol/BHARTIARTL.png" },
  { name: "Asian Paints", sector: "Paints & Chemicals", image: "https://images.dhan.co/symbol/ASIANPAINT.png" },
  { name: "Larsen & Toubro", sector: "Construction", image: "https://images.dhan.co/symbol/LT.png" },
  { name: "Suzlon Energy", sector: "Renewable Energy", image: "https://images.dhan.co/symbol/SUZLON.png" },
  { name: "IRFC", sector: "Railway", image: "https://images.dhan.co/symbol/IRFC.png" },
  { name: "Bajaj Finance", sector: "Financial", image: "https://images.dhan.co/symbol/BAJFINANCE.png" },
  { name: "Mahindra", sector: "Automobile", image: "https://images.dhan.co/symbol/M&M.png" },
];

const CreateTeamsPage = () => {
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const maxStocks = 11;

  const handleBuy = (stock) => {
    if (selectedStocks.length < maxStocks) {
      setSelectedStocks([...selectedStocks, { ...stock, type: "buy" }]);
    }
  };

  const handleSell = (stock) => {
    if (selectedStocks.length < maxStocks) {
      setSelectedStocks([...selectedStocks, { ...stock, type: "sell" }]);
    }
  };

  const handleRemove = (index) => {
    const updatedStocks = [...selectedStocks];
    updatedStocks.splice(index, 1);
    setSelectedStocks(updatedStocks);
  };

  const handleNext = () => {
    localStorage.setItem("selectedStocks", JSON.stringify(selectedStocks));
    localStorage.setItem("buyStocks", JSON.stringify(selectedStocks.filter(stock => stock.type === "buy")));
    localStorage.setItem("sellStocks", JSON.stringify(selectedStocks.filter(stock => stock.type === "sell")));
  };

  const filteredStocks = stockList.filter(stock =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center px-6 py-10 bg-black min-h-screen">
        <div className="w-[1130px] p-6 bg-[#80db66] rounded-xl flex flex-col text-white shadow-lg">
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Buy: {selectedStocks.filter(stock => stock.type === "buy").length}</span>
            <span>Sell: {selectedStocks.filter(stock => stock.type === "sell").length}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {selectedStocks.map((stock, index) => (
              <div 
                key={index} 
                className={`relative p-3 rounded-lg ${
                  stock.type === "buy" ? "border-2 border-green-500" : "border-2 border-red-500"
                }`}
              >
                <img src={stock.image} alt="Stock Logo" className="w-12 h-12 rounded-full" />
                <FaTimes className="absolute top-0 right-0 cursor-pointer text-red-400 hover:text-red-600" onClick={() => handleRemove(index)} />
              </div>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Search Stocks..."
          className="w-[1130px] p-3 mt-6 rounded-lg bg-zinc-900 text-white border border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <section className="w-[1130px] mt-6 bg-zinc-900 rounded-lg p-4 shadow-md">
          {filteredStocks.map((stock, index) => (
            <StockCard key={index} stock={stock} handleBuy={handleBuy} handleSell={handleSell} />
          ))}
        </section>

        <div className="mt-6">
          <Link to="/captainpage">
            <button onClick={handleNext} className="px-16 py-3 text-2xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all">
              NEXT
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

const StockCard = ({ stock, handleBuy, handleSell }) => {
  return (
    <article className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg text-white mt-4 w-[1100px] shadow-sm">
      <div className="flex items-center gap-3">
        <img src={stock.image} alt="Stock Logo" className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-lg font-bold">{stock.name}</h3>
          <p className="text-sm text-gray-400">{stock.sector}</p>
        </div>
      </div>
      <div className="text-lg font-bold">1278.20 <span className="text-red-500">-7.00 (-0.54%)</span></div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-green-500 rounded-lg" onClick={() => handleBuy(stock)}>BUY</button>
        <button className="px-4 py-2 bg-red-500 rounded-lg" onClick={() => handleSell(stock)}>SELL</button>
      </div>
    </article>
  );
};

export default CreateTeamsPage;



// mport React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { FaTimes } from "react-icons/fa";

// const stockList = [
//   { name: "Reliance Industries", sector: "Oil & Gas", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d2941aebaf0bae02cef9451ceafa76f5b4602e86d284d3861ff14690e7a7ec6" },
//   { name: "Tata Motors", sector: "Automobile", image: "https://images.dhan.co/symbol/TATAMOTORS.png" },
//   { name: "HDFC Bank", sector: "Banking", image: "https://images.dhan.co/symbol/HDFCBANK.png" },
//   { name: "Infosys", sector: "IT Services", image: "https://images.dhan.co/symbol/INFY.png" },
//   { name: "Bharti Airtel", sector: "Telecom", image: "https://images.dhan.co/symbol/BHARTIARTL.png" },
//   { name: "Asian Paints", sector: "Paints & Chemicals", image: "https://images.dhan.co/symbol/ASIANPAINT.png" },
//   { name: "Larsen & Toubro", sector: "Construction", image: "https://images.dhan.co/symbol/LT.png" },
//   { name: "Suzlon Energy", sector: "Renewable Energy", image: "https://images.dhan.co/symbol/SUZLON.png" },
//   { name: "IRFC", sector: "Railway", image: "https://images.dhan.co/symbol/IRFC.png" },
//   { name: "Bajaj Finance", sector: "Financial", image: "https://images.dhan.co/symbol/BAJFINANCE.png" },
//   { name: "Mahindra", sector: "Automobile", image: "https://images.dhan.co/symbol/M&M.png" },
// ];

// const CreateTeamsPage = () => {
//   const [selectedStocks, setSelectedStocks] = useState([]);
//   const maxStocks = 11;

//   const handleBuy = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "buy" }]);
//     }
//   };

//   const handleSell = (stock) => {
//     if (selectedStocks.length < maxStocks) {
//       setSelectedStocks([...selectedStocks, { ...stock, type: "sell" }]);
//     }
//   };

//   const handleRemove = (index) => {
//     const updatedStocks = [...selectedStocks];
//     updatedStocks.splice(index, 1);
//     setSelectedStocks(updatedStocks);
//   };

//   const handleNext = () => {
//     if (selectedStocks.length !== maxStocks) {
//       alert(`Please select exactly ${maxStocks} stocks!`);
//       return;
//     }

//     const buyStocks = selectedStocks.filter(stock => stock.type === "buy");
//     const sellStocks = selectedStocks.filter(stock => stock.type === "sell");

//     // Retrieve existing teams or initialize an empty array
//     const existingTeams = JSON.parse(localStorage.getItem("teams")) || [];

//     // Create a new team object with unique ID
//     const newTeam = {
//       teamId: existingTeams.length + 1,
//       stocks: selectedStocks,
//       buyStocks,
//       sellStocks,
//     };

//     // Store all teams back into localStorage
//     localStorage.setItem("teams", JSON.stringify([...existingTeams, newTeam]));
//   };

//   const buyCount = selectedStocks.filter(stock => stock.type === "buy").length;
//   const sellCount = selectedStocks.filter(stock => stock.type === "sell").length;

//   return (
//     <>
//       <Navbar />
//       <main className="flex flex-col items-center px-6 py-10 bg-black min-h-screen">
//         <div className="w-[1130px] p-6 bg-[#80db66] rounded-xl flex flex-col text-white shadow-lg">
//           <div className="flex justify-between text-lg font-bold mb-4">
//             <span>Buy: {buyCount}</span>
//             <span>Sell: {sellCount}</span>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             {selectedStocks.map((stock, index) => (
//               <div 
//                 key={index} 
//                 className={`relative p-3 rounded-lg ${
//                   stock.type === "buy" ? "border-2 border-green-500" : "border-2 border-red-500"
//                 }`}
//               >
//                 <img
//                   src={stock.image}
//                   alt="Stock Logo"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <FaTimes 
//                   className="absolute top-0 right-0 cursor-pointer text-red-400 hover:text-red-600"
//                   onClick={() => handleRemove(index)} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <section className="w-[1130px] mt-6 bg-zinc-900 rounded-lg p-4 shadow-md">
//           {stockList.map((stock, index) => (
//             <StockCard key={index} stock={stock} handleBuy={handleBuy} handleSell={handleSell} />
//           ))}
//         </section>

//         <div className="mt-6">
//           <Link to="/captainpage">
//             <button onClick={handleNext} className="px-16 py-3 text-2xl font-bold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-500 transition-all">
//               NEXT
//             </button>
//           </Link>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// const StockCard = ({ stock, handleBuy, handleSell }) => {
//   return (
//     <article className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg text-white mt-4 w-[1100px] shadow-sm">
//       <div className="flex items-center gap-3">
//         <img
//           src={stock.image}
//           alt="Stock Logo"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <h3 className="text-lg font-bold">{stock.name}</h3>
//           <p className="text-sm text-gray-400">{stock.sector}</p>
//         </div>
//       </div>
//       <div className="text-lg font-bold">1278.20 <span className="text-red-500">-7.00 (-0.54%)</span></div>
//       <div className="flex gap-3">
//         <button className="px-4 py-2 bg-green-500 rounded-lg" onClick={() => handleBuy(stock)}>BUY</button>
//         <button className="px-4 py-2 bg-red-500 rounded-lg" onClick={() => handleSell(stock)}>SELL</button>
//       </div>
//     </article>
//   );
// };

// export default CreateTeamsPage;
