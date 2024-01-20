import React from "react";

export default function AboutUsSection() {
  return (
    <div className="font-Righteous h-screen flex justify-center gap-20">
      <div className="cardbox">
        <img src="image/card1.jpg" alt="" className="img" />
      </div>

      <div className="flex flex-col xl:gap-5 2xl:gap-10 xl:w-[50%] 2xl:w-[35%]">
        <p className="text-3xl">About Us</p>
        <p className="font-Inter text-justify text-[24px]">
          It is a most popular name in the present world. Many people do not
          have their meal in their home, they always take meal and food from
          restaurant. Restaurant is a public place, which opens to all for...
        </p>
        <p className="font-Inter text-justify text-[24px]">
          the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum
        </p>
        <button className="btn text-[25px]">Our Menu</button>
      </div>
    </div>
  );
}
