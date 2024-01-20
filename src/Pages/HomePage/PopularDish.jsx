import React from "react";
import { popularDishInfo } from "./popularDishInfo";

export default function PopularDish() {
  return (
    <div className="font-Inter h-screen">
      <p className="text-[25px] font-bold text-center">Popular Dishes</p>{" "}
      <div className="flex  mt-[5%] gap-5 items-center justify-center">
        {popularDishInfo.map((item, itemIndex) => (
          <div
            className="xl:w-[20%] 2xl:w-[18%] xl:h-[50vh] 2xl:h-[40vh] bg-white rounded-[10px] shadow-xl flex flex-col justify-around"
            key={itemIndex}
          >
            <div className="xl:m-[3%] flex flex-col items-center">
            <img src={item.img} alt="" className="object-contain" />
            </div>

            <p className="text-center text-xl font-semibold mt-[-5%]">Food</p>

            <div className="flex">
              <div className="m-[2%] w-[50%] flex flex-col gap-1">
                <div className="flex items-center">
                  <img src="image/clock.png" alt="" className="w-[10%]" />
                  <p className="">10 min</p>
                </div>
                <img src="image/rating.svg" alt="" className="w-[50%]" />
              </div>

              <div className="w-[50%] flex justify-center items-center">
                <button className="btn text-bgMain w-[90%] h-[60%]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
