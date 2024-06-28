import React from "react";

export const ModelsSkeleton = () => {
  return (
    <div className="w-11/12 md:w-full 2xl:w-[1080px] grid grid-cols-2 grid-rows-5 gap-x-2 lg:gap-x-10 gap-y-10 mb-10 mt-14 ">
      <div className="col-span-1 row-span-4 flex items-center justify-center bg-blue-100/50">
        skeleton
      </div>
      <div className="col-span-1 row-span-4 flex items-center justify-center bg-blue-100/50">
        skeleton
      </div>
    </div>
  );
};
