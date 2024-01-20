import React from "react";

export default function HeroSection() {
  return (
    <div className="h-[95vh] mt-[5rem] flex">
      <div className=" flex flex-col w-[45vw] h-[100%] items-center gap-10">
        <div className="mt-[10%]">
          <p className="text-[50px] font-Righteous ">Pg Fresh</p>
          <p className="text-[50px] font-Righteous text-bgHeader">
            Food Restaurant
          </p>
        </div>

        <div className="ml-[16%]">
          <p className="font-Inter text-[24px] text-justify">
            It is a most popular name in the present world. Many people do not
            have their meal in their home, they always take meal and food from
            restaurant. Restaurant is a public place, which opens to all for...
          </p>
        </div>

        <div className="text-white text-[25px] font-Inter font-semibold flex gap-3">
          <button className="btn drop-shadow-2xl">Get Started</button>
          <button className="btn text-bgFooter bg-white">Learn More</button>
        </div>
      </div>

      <div className="w-[55vw] relative overflow-hidden">
        <div className="bg-bgItem h-[45%] w-[140%] rounded-full 2xl:rotate-[-15deg] xl:rotate-[-20deg] absolute top-24 2xl:left-14 xl:left-20 overflow-visible">
          <img
            src="image/fastfood.png"
            alt=""
            className="2xl:w-[60%] xl:w-[57%] xl:rotate-[16deg] absolute xl:top-[-36%] xl:left-7 z-10"
          />
          <div className="w-[60%] h-[15%] rounded-full xl:rotate-[16deg] bg-[rgba(0,0,0,0.50)] blur-[10px] absolute xl:bottom-[-19%] xl:left-16"></div>
        </div>
      </div>
    </div>
  );
}
