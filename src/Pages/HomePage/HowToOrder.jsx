import React from "react";

export default function HowToOrder() {
  return (
    <div className="h-fit w-screen mt-10 bg-[black] relative">
      <div className="font-Righteous">
        <img src="image/order.png" alt="" className="" />
        <p className="absolute top-5 text-3xl text-white text-center right-[45%]">
          How to order
        </p>
        <div className="mx-[15%]">
          <div className="orderbox flex flex-col justify-evenly items-center">
            <img src="image/Soup Plate.png" alt="" className="w-16" />

            <p className="text-xl">Select Dieshes</p>

            <p className="font-Inter text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled but also the leap into electronic typesetting, remaining
              essentially unchanged.{" "}
            </p>
          </div>

          <div className="orderbox left-[40%] flex flex-col justify-evenly items-center">
            <img src="image/Restaurant.png" alt="" className="w-16" />

            <p className="text-xl">Select Dieshes</p>

            <p className="font-Inter text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled but also the leap into electronic typesetting, remaining
              essentially unchanged.{" "}
            </p>
          </div>

          <div className="orderbox left-[65%] flex flex-col justify-evenly items-center">
            <img src="image/Soup Plate.png" alt="" className="w-16" />

            <p className="text-xl">Select Dieshes</p>

            <p className="font-Inter text-center">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled but also the leap into electronic typesetting, remaining
              essentially unchanged.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[70%] font-Righteous">
        <img src="image/wavyRec.png" alt="" className=" my-10 w-screen " />
        <p className="absolute top-32 right-[39%] text-3xl">
          What Customers Say
        </p>

        <div className="absolute top-[30%] w-[70%] h-[60%] right-[15%] flex gap-10 items-center justify-center">
          <div className="w-[40%] h-[60%] relative">
            <div className="flex items-center flex-col relative">
              <img
                src="image/user1food.jpg"
                alt=""
                className="w-[80%] h-[40vh] border-2 border-bgBtn object-cover rounded-xl shadow-md "
              />
              <img
                src="image/user1jpg.jpg"
                alt=""
                className="w-16 h-16 border-[5px] border-bgHeader rounded-full object-cover absolute bottom-[15px] z-20"
              />
            </div>

            <div className="shadow-2xl w-[70%] h-fit border-2 border-bgBtn rounded-xl absolute top-[65%] right-[15%] bg-white flex flex-col items-center">
              <img src="image/rating.svg" alt="" className="w-16 mt-8" />
              <p className="font-Inter text-center p-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
          </div>

          <div className="w-[40%] h-[60%] relative">
            <div className="flex items-center flex-col relative">
              <img
                src="image/user1food.jpg"
                alt=""
                className="w-[80%] h-[40vh] border-2 border-bgBtn object-cover rounded-xl shadow-md "
              />
              <img
                src="image/user1jpg.jpg"
                alt=""
                className="w-16 h-16 border-[5px] border-bgHeader rounded-full object-cover absolute bottom-[15px] z-20"
              />
            </div>

            <div className="shadow-2xl w-[70%] h-fit border-2 border-bgBtn rounded-xl absolute top-[65%] right-[15%] bg-white flex flex-col items-center">
              <img src="image/rating.svg" alt="" className="w-16 mt-8" />
              <p className="font-Inter text-center p-2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
