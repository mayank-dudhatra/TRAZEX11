// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'

// const contests = [
//   {
//     id: 1,
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1adff2cb2f31b63bd5b8b039a8e7127ca3fd67b86738bdab4faf6ea4085527cf",
//     title: "Guaranteed Plus",
//     amount: "26 Crores",
//     spotsLeft: "500 Spots Left",
//     totalSpots: "1000 Spots",
//     entryFee: 50,
//     prizepool: "26 Crores",
//   },
//   {
//     id: 2,
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1adff2cb2f31b63bd5b8b039a8e7127ca3fd67b86738bdab4faf6ea4085527cf",
//     title: "Mega Contest",
//     amount: "50 Crores",
//     spotsLeft: "200 Spots Left",
//     totalSpots: "500 Spots",
//     entryFee: 100,
//     prizepool: "50 Crores",
//   },
  
// ];

// const GuaranteedPlusHeader = ({ icon, title, amount, spotsLeft, totalSpots, entryFee, prizepool }) => {
//   return (
//     <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1241px] max-md:max-w-full">
//       <div className="flex flex-col self-start max-md:max-w-full">
//         <div className="flex gap-5 self-start text-xl font-semibold text-white">
//           <img
//             loading="lazy"
//             src={icon}
//             className="object-contain shrink-0 my-auto aspect-[1.05] w-[21px]"
//             alt="Guaranteed Plus Icon"
//           />
//           <h1>{title}</h1>
//         </div>
//         <div className="flex flex-wrap gap-5 justify-between items-start mt-6 max-md:max-w-full">
//           <p className="mt-2.5 text-5xl font-bold leading-none text-white max-md:text-4xl">{amount}</p>
//           {/* <p className="text-xs font-semibold leading-10 text-emerald-400">{spotsLeft}</p> */}
//         </div>
//       </div>
//       {/* <p className="my-auto text-xs font-semibold leading-10 text-stone-300">{totalSpots}</p> */}
//       <EntryFeeSection entryFee={entryFee} />
//     </div>
//   );
// };

// const EntryFeeSection = ({ entryFee, prizepool }) => {
//   return (
//     <div className="flex flex-col text-white">
//       <div className="flex flex-col px-8 py-2 w-full text-3xl font-bold leading-none rounded-lg bg-emerald-400 bg-opacity-10 max-md:px-5">
//         <h2>Entry Fee</h2>
//         <div className="flex gap-3.5 self-center items-center mt-1 whitespace-nowrap w-[79px]">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/a173a2cfdc7598c5bce331a49044fb35aaa78a619f2d1b37ebbf2edde63c9cee"
//             className="object-contain shrink-0 mt-1 my-auto w-8 aspect-[1.07]"
//             alt="Entry Fee Icon"
//           />
//           <span>{entryFee}</span>
//         </div>
//       </div>
//       <Link to="/createteams"><button className="self-center mt-4 text-[21px] text-white bg-[#3FD68C] px-4 py-2 h-[47px] w-[157px] font-semibold rounded-md flex items-center justify-center">
//         Join Now <span className="ml-2">➜</span>
//       </button></Link>
//     </div>
//   );
// };

// const StatsSection = ( {prizepool} ) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap gap-5 items-center justify-between px-7 py-1.5 mt-4 w-full font-medium rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-wrap gap-10 text-2xl max-md:max-w-full">
//         <div className="flex flex-auto gap-5 items-center self-start text-stone-300">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ead62c132ac2c7e2d772a0bbf895d37c7840641f982fac36ecf0a2d4cac257"
//             className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]"
//             alt="Stats Icon"
//           />
//           <span className="self-stretch leading-relaxed">1.50 Cr</span>
//           <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
//           <span className="flex items-center justify-center w-8 h-8 text-lg font-semibold text-white border-2 border-stone-300 rounded-lg">
//           M
//           </span>
//           <span className="self-stretch my-auto leading-tight">Upto 20</span>
//           <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
//         </div>
//         <span className="leading-relaxed text-white">64%</span>
//       </div>
//       <div className="flex gap-7 self-start text-2xl leading-loose text-white">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d91e4d51c1d362e15a4dfa163f2ee77bde5b2a6d37d4eccdfc4997fb00ea46"
//           className="object-contain shrink-0 my-auto w-8 aspect-[1.68]"
//           alt="Total Amount Icon"
//         />
//         <span>{prizepool}</span>
//       </div>
//     </div>
//   );
// };

// const GuaranteedPlus = () => {
//   return (
//     <>
//     <Navbar />
//     <div className='flex items-center justify-center'>
//       <section className="rounded-none mt-10 w-[1291px]">
//         {contests.map((contest) => (
//           <article key={contest.id} className="flex flex-col pt-3.5 w-full rounded-lg bg-stone-900 max-md:max-w-full mb-5">
//             <GuaranteedPlusHeader {...contest} />
//             <StatsSection prizepool={contest.prizepool} />
//           </article>
//         ))}
//       </section>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default GuaranteedPlus;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const GuaranteedPlusHeader = ({ icon, title, amount, spotsLeft, totalSpots, entryFee, prizepool }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1241px] max-md:max-w-full">
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="flex gap-5 self-start text-xl font-semibold text-white">
          <img loading="lazy" src={icon} className="object-contain shrink-0 my-auto aspect-[1.05] w-[21px]" alt="Guaranteed Plus Icon" />
          <h1>{title}</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-6 max-md:max-w-full">
          <p className="mt-2.5 text-5xl font-bold leading-none text-white max-md:text-4xl">{amount}</p>
        </div>
      </div>
      <ProgressBar spotsLeft={spotsLeft} totalSpots={totalSpots} />
      <EntryFeeSection entryFee={entryFee} />
    </div>
  );
};


const ProgressBar = ({ spotsLeft, totalSpots }) => {
  // Ensure spotsLeft and totalSpots are numbers
  const progress = ((totalSpots - spotsLeft) / totalSpots) * 100;

  return (
    <div className="w-full max-w-[350px] self-center">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span className="text-green-400">{spotsLeft.toLocaleString()}</span>
        <span>{totalSpots.toLocaleString()}</span>
      </div>

      <div className="relative w-full h-3 bg-gray-700 rounded-full">
        <div
          className="h-full bg-green-400 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};



const EntryFeeSection = ({ entryFee }) => {

  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-col px-8 py-2 w-full text-3xl font-bold leading-none rounded-lg bg-emerald-400 bg-opacity-10 max-md:px-5">
        <h2>Entry Fee</h2>
        <div className="flex gap-3.5 self-center items-center mt-1 whitespace-nowrap w-[79px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a173a2cfdc7598c5bce331a49044fb35aaa78a619f2d1b37ebbf2edde63c9cee" className="object-contain shrink-0 mt-1 my-auto w-8 aspect-[1.07]" alt="Entry Fee Icon" />
          <span>{entryFee}</span>
        </div>
      </div>
      

      
      <Link to="/createteams">
        <button className="self-center mt-4 text-[21px] text-white bg-[#3FD68C] px-4 py-2 h-[47px] w-[157px] font-semibold rounded-md flex items-center justify-center">
          Join Now <span className="ml-2">➜</span>
        </button>
      </Link>
    </div>
  );
};

const StatsSection = ({ prizepool, firstprize, winpercentage, totalteam }) => {
  return (
    <div className="flex overflow-hidden flex-wrap gap-5 items-center justify-between px-7 py-1.5 mt-4 w-full font-medium rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 text-2xl max-md:max-w-full">
        <div className="flex flex-auto gap-5 items-center self-start text-stone-300">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ead62c132ac2c7e2d772a0bbf895d37c7840641f982fac36ecf0a2d4cac257" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]" alt="Stats Icon" />
          <span className="self-stretch leading-relaxed">{firstprize}  </span>
          <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
          <span className="flex items-center justify-center w-8 h-8 text-lg font-semibold text-white border-2 border-stone-300 rounded-lg">M</span>
          <span className="self-stretch my-auto leading-tight">Upto {totalteam}</span>
          <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
        </div>
        <span className="leading-relaxed text-white">{winpercentage}%</span>
      </div>
      <div className="flex gap-7 self-start text-2xl leading-loose text-white">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d91e4d51c1d362e15a4dfa163f2ee77bde5b2a6d37d4eccdfc4997fb00ea46" className="object-contain shrink-0 my-auto w-8 aspect-[1.68]" alt="Total Amount Icon" />
        <span>{prizepool}</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ccfc38390615e5dcc4424b858b95819238dc694198d88f05c1c2f6787e3172" alt="coin" className='object-contain shrink-0 my-auto w-8 ' />
      </div>
    </div>
  );
};

const GuaranteedPlus = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api1/create-contests')
      .then(response => {
        setContests(response.data);
      })
      .catch(error => {
        console.error("Error fetching contests:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center'>
        <section className="rounded-none mt-10 w-[1291px]">
          {contests.map((contest) => (
            <article key={contest._id} className="flex flex-col pt-3.5 w-full rounded-lg bg-stone-900 max-md:max-w-full mb-5">
              <GuaranteedPlusHeader 
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1adff2cb2f31b63bd5b8b039a8e7127ca3fd67b86738bdab4faf6ea4085527cf" 
                title={contest.name} 
                amount={`${contest.prize} Coins`} 
                spotsLeft={contest.spotsLeft} 
                totalSpots={contest.totalSpots} 
                entryFee={contest.entryFee} 
                prizepool={`${contest.prize} Coins`} 
              />
              <StatsSection 
              prizepool={`${contest.prize}`} 
              firstprize={`${contest.firstprize}`}
              totalteam = {`${contest.maximumteam}`}
              winpercentage = {`${contest.winpercentage}`}
              />
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GuaranteedPlus;









// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// const GuaranteedPlusHeader = ({ icon, title, amount, spotsLeft, totalSpots, entryFee, prizepool, contestId, handleJoinContest }) => {
//   return (
//     <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1241px] max-md:max-w-full">
//       <div className="flex flex-col self-start max-md:max-w-full">
//         <div className="flex gap-5 self-start text-xl font-semibold text-white">
//           <img loading="lazy" src={icon} className="object-contain shrink-0 my-auto aspect-[1.05] w-[21px]" alt="Guaranteed Plus Icon" />
//           <h1>{title}</h1>
//         </div>
//         <div className="flex flex-wrap gap-5 justify-between items-start mt-6 max-md:max-w-full">
//           <p className="mt-2.5 text-5xl font-bold leading-none text-white max-md:text-4xl">{amount}</p>
//         </div>
//       </div>
//       <ProgressBar spotsLeft={spotsLeft} totalSpots={totalSpots} />
//       <EntryFeeSection entryFee={entryFee} contestId={contestId} handleJoinContest={handleJoinContest} />
//     </div>
//   );
// };

// const ProgressBar = ({ spotsLeft, totalSpots }) => {
//   const progress = ((totalSpots - spotsLeft) / totalSpots) * 100;
//   return (
//     <div className="w-full max-w-[350px] self-center">
//       <div className="flex justify-between text-xs text-gray-400 mb-1">
//         <span className="text-green-400">{spotsLeft.toLocaleString()}</span>
//         <span>{totalSpots.toLocaleString()}</span>
//       </div>
//       <div className="relative w-full h-3 bg-gray-700 rounded-full">
//         <div className="h-full bg-green-400 rounded-full" style={{ width: `${progress}%` }}></div>
//       </div>
//     </div>
//   );
// };

// const EntryFeeSection = ({ entryFee, contestId, handleJoinContest }) => {
//   return (
//     <div className="flex flex-col text-white">
//       <div className="flex flex-col px-8 py-2 w-full text-3xl font-bold leading-none rounded-lg bg-emerald-400 bg-opacity-10 max-md:px-5">
//         <h2>Entry Fee</h2>
//         <div className="flex gap-3.5 self-center items-center mt-1 whitespace-nowrap w-[79px]">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a173a2cfdc7598c5bce331a49044fb35aaa78a619f2d1b37ebbf2edde63c9cee" className="object-contain shrink-0 mt-1 my-auto w-8 aspect-[1.07]" alt="Entry Fee Icon" />
//           <span>{entryFee}</span>
//         </div>
//       </div>
//       <button 
//         onClick={() => handleJoinContest(contestId)}
//         className="self-center mt-4 text-[21px] text-white bg-[#3FD68C] px-4 py-2 h-[47px] w-[157px] font-semibold rounded-md flex items-center justify-center">
//         Join Now <span className="ml-2">➜</span>
//       </button>
//     </div>
//   );
// };

// const StatsSection = ({ prizepool, firstprize, winpercentage, totalteam }) => {
//   return (
//     <div className="flex overflow-hidden flex-wrap gap-5 items-center justify-between px-7 py-1.5 mt-4 w-full font-medium rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-wrap gap-10 text-2xl max-md:max-w-full">
//         <div className="flex flex-auto gap-5 items-center self-start text-stone-300">
//           <img loading="lazy" src="..." alt="Stats Icon" />
//           <span className="self-stretch leading-relaxed">{firstprize}  </span>
//           <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
//           <span className="flex items-center justify-center w-8 h-8 text-lg font-semibold text-white border-2 border-stone-300 rounded-lg">M</span>
//           <span className="self-stretch my-auto leading-tight">Upto {totalteam}</span>
//           <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
//         </div>
//         <span className="leading-relaxed text-white">{winpercentage}%</span>
//       </div>
//       <div className="flex gap-7 self-start text-2xl leading-loose text-white">
//         <img loading="lazy" src="..." alt="Total Amount Icon" />
//         <span>{prizepool}</span>
//         <img src="..." alt="coin" className='object-contain shrink-0 my-auto w-8 ' />
//       </div>
//     </div>
//   );
// };


// const GuaranteedPlus = () => {
//   const [contests, setContests] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/api1/create-contests')
//       .then(response => {
//         setContests(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching contests:", error);
//       });
//   }, []);

//   const handleJoinContest = (contestId) => {
//     const userId = "USER_ID_PLACEHOLDER"; // Replace with actual user ID
//     axios.post('http://localhost:3000/api1/join-contest', { contestId, userId })
//       .then(response => {
//         alert("Successfully joined contest!");
//       })
//       .catch(error => {
//         console.error("Error joining contest:", error);
//         alert("Failed to join contest. Please try again.");
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='flex items-center justify-center'>
//         <section className="rounded-none mt-10 w-[1291px]">
//           {contests.map((contest) => (
//             <article key={contest._id} className="flex flex-col pt-3.5 w-full rounded-lg bg-stone-900 max-md:max-w-full mb-5">
//               <GuaranteedPlusHeader 
//                 icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1adff2cb2f31b63bd5b8b039a8e7127ca3fd67b86738bdab4faf6ea4085527cf" 
//                 title={contest.name} 
//                 amount={`${contest.prize} Coins`} 
//                 spotsLeft={contest.spotsLeft} 
//                 totalSpots={contest.totalSpots} 
//                 entryFee={contest.entryFee} 
//                 prizepool={`${contest.prize} Coins`} 
//                 contestId={contest._id}
//                 handleJoinContest={handleJoinContest}
//               />
//               <StatsSection 
//                 prizepool={`${contest.prize}`} 
//                 firstprize={`${contest.firstprize}`} 
//                 totalteam={`${contest.
//                   maximumteam
//                   }`} 
//                 winpercentage={`${contest.winpercentage}`} 
//               />
//             </article>
//           ))}
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default GuaranteedPlus;
