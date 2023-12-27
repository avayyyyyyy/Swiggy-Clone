import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

import rest from "./Restraunt.js";

const MainHero = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[3px] bg-zinc-300 w-[80%] m-8" />
      <div className="w-[77%] mb-4 font-semibold text-2xl">
        <h1>Top restaurant chains in Jaipur!</h1>
      </div>
      <div className="w-[80%] flex flex-wrap justify-center gap-4">
        {rest.map((e) => {
          return (
            <div
              className="cursor-pointer  bg-zinc-100 text-lg font-semibold  flex-col justify-between  flex rounded-md p-3 hover:scale-95 transition-all"
              key={e.id}
            >
              <img className="w-56  rounded-md " src={e.image} alt="" />
              <div className="flex flex-col m-2 gap-1">
                <h6 className="font-medium">{e.name}</h6>
                <h6 className="flex items-center gap-1 font-normal">
                  <HiOutlineBadgeCheck />
                  {e.rating}
                </h6>
                <h6 className="text-sm text-zinc-700 font-normal">
                  {e.category}
                </h6>
                <h6 className=" font-normal text-base flex items-center gap-1">
                  <FaLocationDot />
                  {e.address}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainHero;
