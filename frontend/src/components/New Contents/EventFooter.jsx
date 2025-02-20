// export const EventFooter = () => {
//     return (
//       <footer className="flex overflow-hidden flex-wrap gap-5 justify-between py-1.5 pr-7 pl-20 mt-8 w-full rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
//         {/* <img src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738904921/t8vonwd8d8ozy0aefomq.png" alt="" /> */}
//         <p className="text-xl font-medium leading-10 text-stone-300">
//           29 Joined
//         </p>
//         <div className="flex gap-9 self-start text-2xl font-semibold leading-loose text-white">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84d5068a102141ee73df60d8e5fef870ef87f9ecd7c6f4a2dca8016d089a2a0?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
//             className="object-contain shrink-0 my-auto w-7 aspect-[0.97]"
//             alt="Notification Icon"
//           />
//           <button className="basis-auto border-none">
//             Get Notifies
//           </button>
//         </div>
//       </footer>
//     );
//   };


export const EventFooter = () => {
    return (
      <footer className="flex overflow-hidden flex-wrap gap-5 justify-between py-1.5 pr-7 pl-5  mt-8 w-[1291px] h-[52px] rounded-lg bg-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex items-center gap-2 ">
          <span className="text-yellow-500 text-2xl">🏆</span>
          <p className="text-xl font-medium leading-10 text-stone-300">
            29 Joined
          </p>
        </div>
        <div className="flex gap-3 items-center text-2xl font-semibold leading-loose text-white">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84d5068a102141ee73df60d8e5fef870ef87f9ecd7c6f4a2dca8016d089a2a0?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072"
            className="object-contain w-7 h-7"
            alt="Notification Icon"
          />
          <button className="border-none bg-transparent text-white text-lg font-medium hover:underline">
            Get Notified
          </button>
        </div>
      </footer>
    );
  };
  