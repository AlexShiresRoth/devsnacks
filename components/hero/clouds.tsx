export const CloudSmall = () => {
  return (
    <div className="absolute bottom-[30vh] md:bottom-[60vh] left-4 -z-10 block opacity-80 animate-cloudMobile md:animate-cloud">
      <div className="relative flex justify-center">
        <span className="absolute -bottom-14 left-9 h-24 w-24 rounded-full bg-slate-100" />
        <span className="absolute bottom-0 left-0 top-0 h-20 w-44 rounded-full bg-slate-100" />
      </div>
    </div>
  );
};

export const CloudMedium = () => {
  return (
    <div className="absolute bottom-[50vh] left-6 -z-10 block opacity-80 animate-cloudMobile2 md:animate-cloud2">
      <div className="relative flex  justify-center">
        <span className="absolute -bottom-20 left-20 h-36 w-36 rounded-full bg-slate-100" />
        <span className="absolute bottom-0 left-0 top-0 h-28 w-72 rounded-full bg-slate-100" />
        <span className="absolute -top-2 -left-2 h-36 w-36 rounded-full bg-slate-100" />
        <span className="absolute -top-2 left-20 h-36 w-36 rounded-full bg-slate-100" />
      </div>
    </div>
  );
};

export const Cloud = () => {
  return (
    <div className="absolute bottom-[40vh] md:bottom-[55vh] left-4 -z-10 block opacity-80 animate-cloudMobile3 md:animate-cloud3">
      <div className="relative flex  justify-center">
        <span className="absolute -bottom-20 left-7 h-28 w-28 rounded-full bg-slate-100" />
        <span className="absolute -bottom-20 left-24 h-28 w-28 rounded-full bg-slate-100" />
        <span className="absolute bottom-0 -left-5 top-0 h-28 w-72 rounded-full bg-slate-100" />
        <span className="absolute top-4 left-5 h-28 w-28 rounded-full bg-slate-100" />
        <span className="absolute top-4 left-28 h-28 w-28 rounded-full bg-slate-100" />
      </div>
    </div>
  );
};
