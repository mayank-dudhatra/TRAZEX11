export const EventHeader = () => {
    return (
      <header className="flex gap-5 self-start ml-3 text-xl font-semibold whitespace-nowrap text-stone-300 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dbrb9ptmn/image/upload/v1738904644/nbbzv6vdg9mitp2mque8.png"
          className="object-contain shrink-0 w-7 aspect-square"
          alt="NSE Logo"
        />
        <h1 className="my-auto">NSE</h1>
      </header>
    );
  };