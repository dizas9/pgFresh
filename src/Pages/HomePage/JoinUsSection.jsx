import React from "react";

export default function JoinUsSection() {
  return (
    <div className="text-3xl h-screen mt-[100vh] relative flex flex-col items-center">
      <img src="image/coffee.png" alt="" />

      <p className="absolute top-32 font-Righteous text-white text-[50px] mx-64 text-center leading-[4rem]">
        Join us to get an amazing discount on your next order
      </p>

      <div className="h-[10%] w-[50%] absolute top-[60%] bg-bgMain rounded-lg flex justify-start pl-1 items-center shadow-xl">
        <input type="text" className="h-[90%] w-[80%] rounded-sm text-sm font-Righteous pl-10" placeholder="your email hear" />
        <button className="btn w-[25%] h-full scale-100 text-sm font-Righteous tracking-[0.5rem]">Submit</button>
      </div>
    </div>
  );
}