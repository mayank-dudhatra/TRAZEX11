import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const contests = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1adff2cb2f31b63bd5b8b039a8e7127ca3fd67b86738bdab4faf6ea4085527cf",
    title: "Guaranteed Plus",
    amount: "500 Coins",
    spotsLeft: "4 Spots Left",
    totalSpots: "5 Spots",
    entryFee: 50,
    prizepool: "500",
  },

];

const GuaranteedPlusHeader = ({ icon, title, amount, spotsLeft, totalSpots, entryFee, prizepool }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1241px]  max-md:max-w-full">
      <div className="flex flex-col self-start max-md:max-w-full">
        <div className="flex gap-5 self-start text-xl font-semibold text-white">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 my-auto aspect-[1.05] w-[21px]"
            alt="Guaranteed Plus Icon"
          />
          <h1>{title}</h1>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-6 max-md:max-w-full">
          <p className="mt-2.5 text-5xl font-bold leading-none text-white max-md:text-4xl">{amount}</p>
          {/* <p className="text-xs font-semibold leading-10 text-emerald-400">{spotsLeft}</p> */}
        </div>
      </div>
      {/* <p className="my-auto text-xs font-semibold leading-10 text-stone-300">{totalSpots}</p> */}
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



const EntryFeeSection = ({ entryFee, prizepool }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center px-8 py-2 w-full text-3xl font-bold leading-none rounded-lg bg-emerald-400 bg-opacity-10 max-md:px-5">
          <img className='h-[40px] w-[40px] ' src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739714517/lupnj6inuaripexhfc4w.png"  alt="coins" />
      <h2 className='text-[#c5c5c5] font-medium mt-2'>Awaited!</h2>
      </div>
      <Link className='flex justify-center' to="/createteams"><button className="self-center mt-4 text-[21px] text-white bg-[#3FD68C] px-4 py-2 h-[47px] w-[157px] font-semibold rounded-md flex items-center justify-center">
        Join Now <span className="ml-2">➜</span>
      </button></Link>
    </div>
  );
};

const StatsSection = ({ prizepool, onToggle }) => {
  return (
    <>
      <div className="flex overflow-hidden flex-wrap gap-5 items-center justify-between px-7 py-1.5 mt-4 w-full font-medium rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 text-2xl max-md:max-w-full">
          <div className="flex flex-auto gap-5 items-center self-start text-stone-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ead62c132ac2c7e2d772a0bbf895d37c7840641f982fac36ecf0a2d4cac257"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]"
              alt="Stats Icon"
            />
            <span className="self-stretch leading-relaxed">250</span>
            <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
            <span className="flex items-center justify-center w-8 h-8 text-lg font-semibold text-white border-2 border-stone-300 rounded-lg">
              M
            </span>
            <span className="self-stretch my-auto leading-tight">Upto 11</span>
            <div className="shrink-0 self-stretch my-auto w-px h-9 border border-white border-solid" />
          </div>
          <span className="leading-relaxed text-white">40%</span>
        </div>
        <div className="flex gap-7 self-start text-2xl leading-loose text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d91e4d51c1d362e15a4dfa163f2ee77bde5b2a6d37d4eccdfc4997fb00ea46"
            className="object-contain shrink-0 my-auto w-8 aspect-[1.68]"
            alt="Total Amount Icon"
          />
          <span>{prizepool}</span>
        </div>
      </div>
      <TeamInfo onToggle={onToggle} />
    </>
  );
};


function TeamInfo({ onToggle }) {
  return (
    <div className="max-w-[1341px]">
      <div
        className="flex flex-wrap gap-5 justify-between text-2xl leading-loose w-full bg-[linear-gradient(to_left,#DFDFDF_0%,#D0D0D0_25%,#848484_100%)] rounded-lg px-2 py-1 shadow-md relative cursor-pointer"
        onClick={onToggle}
      >
        <div className="text-white px-4 font-semibold">Joined with 1 Team</div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/018b7148eec24a4f0c02deea20bf95b1509f2729a7c7ca51c2e113b078701463?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
          className="object-contain shrink-0 my-auto mr-6 w-6 h-6"
          alt="Dropdown"
        />

        <div className="absolute left-5 -bottom-3 px-5 py-1 text-xs bg-[#666666] text-white rounded-full shadow-lg">
          T1
        </div>
      </div>
    </div>
  );
}



const MyTeam = () => {
    const [captain, setCaptain] = useState(null);
    const [viceCaptain, setViceCaptain] = useState(null);
  
    useEffect(() => {
      const storedCaptain = JSON.parse(localStorage.getItem("captain"));
      const storedViceCaptain = JSON.parse(localStorage.getItem("viceCaptain"));
  
      setCaptain(storedCaptain);
      setViceCaptain(storedViceCaptain);
    }, []);
  
    return (
      <section className="flex justify-center items-center py-2">
        <article className="relative flex flex-wrap gap-5 justify-between px-4 items-center w-[1191px] h-[142px] rounded-lg border bg-opacity-0 border-stone-300 max-md:max-w-full">
          {/* Icons at Top Right */}
          <div className="absolute top-2 right-4 flex gap-4">
            <img
              src="https://res-console.cloudinary.com/dbrb9ptmn/media_explorer_thumbnails/751e2605e971369327c520770d9b0247/detailed"
              alt="Icon 1"
              className="w-6 h-6 object-contain cursor-pointer"
            />
            <img
              src="https://res-console.cloudinary.com/dbrb9ptmn/media_explorer_thumbnails/95aeb7e595a45f011c4499c98abaf3b7/detailed"
              alt="Icon 2"
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </div>
  
          {captain ? (
            <div className="flex flex-wrap gap-10 items-center text-3xl font-semibold">
              <span className="px-3.5 self-start rounded-lg -mt-[22px] bg-stone-300 text-stone-500">T1</span>
              <div className="flex gap-10 items-center">
                <img
                  loading="lazy"
                  src={captain.image}
                  className="object-contain w-[90px]"
                  alt={captain.name}
                />
                <div className="flex flex-col items-center text-stone-300">
                  <span className="self-start">C</span>
                  <span className="mt-2">{captain.name}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">No Captain Selected</p>
          )}
  
          {viceCaptain ? (
            <div className="flex gap-10 items-center text-stone-300"> {/* Increased gap for spacing */}
              <img
                loading="lazy"
                src={viceCaptain.image}
                className="object-contain w-[90px]"
                alt={viceCaptain.name}
              />
              <div className="flex flex-col text-3xl font-semibold items-center mr-28 text-stone-300">
                <span className="self-start ">VC</span>
                <span className="mt-2">{viceCaptain.name}</span>
              </div>
            </div>
          ) : (
            <p className="text-white">No Vice-Captain Selected</p>
          )}
        </article>
      </section>
    );
  };


function MyContest() {
  const [showMyTeam, setShowMyTeam] = useState(false);

  const handleToggle = () => {
    setShowMyTeam((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <section className="rounded-none mt-10 w-[1291px]">
          {contests.map((contest) => (
            <article
              key={contest.id}
              className="flex flex-col pt-3.5 w-full rounded-lg bg-stone-900 max-md:max-w-full mb-5"
            >
              <GuaranteedPlusHeader {...contest}  
                spotsLeft={contest.spotsLeft} 
                totalSpots={contest.totalSpots}  />
              <StatsSection prizepool={contest.prizepool} onToggle={handleToggle} />
            </article>
          ))}
          {showMyTeam && <MyTeam />}
        </section>
      </div>
      <Footer />
    </>
  );
}

export default MyContest



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

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

// const GuaranteedPlusHeader = ({ icon, title, amount, entryFee }) => {
//   return (
//     <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1241px]">
//       <div className="flex flex-col">
//         <div className="flex gap-5 text-xl font-semibold text-white">
//           <img loading="lazy" src={icon} className="w-[21px]" alt="Guaranteed Plus Icon" />
//           <h1>{title}</h1>
//         </div>
//         <div className="flex flex-wrap gap-5 justify-between mt-6">
//           <p className="mt-2.5 text-5xl font-bold text-white">{amount}</p>
//         </div>
//       </div>
//       <EntryFeeSection entryFee={entryFee} />
//     </div>
//   );
// };

// const EntryFeeSection = ({ entryFee }) => {
//   return (
//     <div className="flex flex-col justify-center items-center text-white">
//       <div className="px-8 py-2 w-full text-3xl font-bold rounded-lg bg-emerald-400 bg-opacity-10">
//         <img className="h-[40px] w-[40px]" src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1739714517/lupnj6inuaripexhfc4w.png" alt="coins" />
//         <h2 className="text-[#c5c5c5] font-medium mt-2">Awaited!</h2>
//       </div>
//       <Link to="/createteams">
//         <button className="mt-4 text-[21px] text-white bg-[#3FD68C] px-4 py-2 h-[47px] w-[157px] font-semibold rounded-md flex items-center justify-center">
//           Join Now <span className="ml-2">➜</span>
//         </button>
//       </Link>
//     </div>
//   );
// };

// const StatsSection = ({ prizepool, onToggle }) => {
//   return (
//     <>
//       <div className="flex flex-wrap gap-5 items-center justify-between px-7 py-1.5 mt-4 w-full font-medium rounded-lg bg-neutral-800">
//         <div className="flex flex-wrap gap-10 text-2xl">
//           <div className="flex flex-auto gap-5 items-center text-stone-300">
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8ead62c132ac2c7e2d772a0bbf895d37c7840641f982fac36ecf0a2d4cac257" className="w-[35px]" alt="Stats Icon" />
//             <span>1.50 Cr</span>
//             <div className="w-px h-9 border border-white" />
//             <span className="flex items-center justify-center w-8 h-8 text-lg font-semibold text-white border-2 border-stone-300 rounded-lg">M</span>
//             <span>Upto 20</span>
//             <div className="w-px h-9 border border-white" />
//           </div>
//           <span className="text-white">64%</span>
//         </div>
//         <div className="flex gap-7 text-2xl leading-loose text-white">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d91e4d51c1d362e15a4dfa163f2ee77bde5b2a6d37d4eccdfc4997fb00ea46" className="w-8" alt="Total Amount Icon" />
//           <span>{prizepool}</span>
//         </div>
//       </div>
//       <TeamInfo onToggle={onToggle} />
//     </>
//   );
// };

// const TeamInfo = ({ onToggle }) => {
//   return (
//     <div className="max-w-[1341px]">
//       <div
//         className="flex flex-wrap gap-5 justify-between text-2xl leading-loose w-full bg-[linear-gradient(to_right,#DFDFDF_0%,#D0D0D0_25%,#848484_100%)] rounded-lg px-2 py-1 shadow-md relative cursor-pointer"
//         onClick={onToggle}
//       >
//         <div className="text-white px-4 font-semibold">Joined with 1 Team</div>
//         <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/018b7148eec24a4f0c02deea20bf95b1509f2729a7c7ca51c2e113b078701463" className="w-6 h-6" alt="Dropdown" />
//         <div className="absolute left-5 -bottom-3 px-5 py-1 text-xs bg-[#666666] text-white rounded-full shadow-lg">T1</div>
//       </div>
//     </div>
//   );
// };


// const MyTeam = () => {
//   const companyImageUrl =
//     "https://cdn.builder.io/api/v1/image/assets/TEMP/c714cd6b8242a84c86a910fcd2ffc7fcbaf18912e20644170c6b02663e905ff9?placeholderIfAbsent=true&apiKey=9d02f036745c42a2991e838c5864ecf0";

//   return (
//     <section className="flex justify-center items-center py-10">
// <article className="flex flex-wrap gap-5 justify-between px-1 items-center w-[1191px] h-[142px] rounded-lg border bg-opacity-0 border-stone-300 max-md:max-w-full">
//   <div className="flex flex-wrap gap-10 items-center text-3xl font-semibold">
//     <span className="px-3.5 self-start rounded-lg -mt-[22px] bg-stone-300 text-stone-500">T1</span>

//     <div className="flex gap-10 items-center">
//       <img
//         loading="lazy"
//         src={companyImageUrl}
//         className="object-contain w-[90px]"
//         alt="Reliance Industries logo"
//       />
//       <div className="flex flex-col items-center text-stone-300">
//         <span className='self-start'>C</span>
//         <span className="mt-2">Reliance Industries</span>
//       </div>
//     </div>
//   </div>

//   <div className="flex gap-10 items-center text-stone-300">
//     <img
//       loading="lazy"
//       src={companyImageUrl}
//       className="object-contain w-[90px]"
//       alt="Reliance Industries logo"
//     />
//     <div className="flex flex-col text-3xl font-semibold items-center text-stone-300">
//       <span className='self-start'>VC</span>
//       <span className="mt-2">Reliance Industries</span>
//     </div>
//   </div>

//   <div className="flex gap-9 self-start  items-center">
//     <button aria-label="First action" className='border-none'>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/eadf669663ae47df4778388f71ae9b7b997ff1d5a46b3af716cde3811afae167"
//         className="object-contain w-[25px]"
//         alt="First action icon"
//       />
//     </button>
//     <button aria-label="Second action" className='border-none'>
//       <img
//         loading="lazy"
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/adcd385b4423e072ca8e7878c0a49c060af9b77a62c284aeba4fd157c975071e"
//         className="object-contain w-[30px]"
//         alt="Second action icon"
//       />
//     </button>
//   </div>
// </article>
// </section>

  
//   );
// };



// function MyContest() {
//   const [showMyTeam, setShowMyTeam] = useState(false);

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center">
//         <section className="rounded-none mt-10 w-[1291px]">
//           {contests.map((contest) => (
//             <article key={contest.id} className="flex flex-col pt-3.5 w-full rounded-lg bg-stone-900 mb-5">
//               <GuaranteedPlusHeader {...contest} />
//               <StatsSection prizepool={contest.prizepool} onToggle={() => setShowMyTeam(!showMyTeam)} />
//             </article>
//           ))}
//           {showMyTeam && <MyTeam />}
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default MyContest;
