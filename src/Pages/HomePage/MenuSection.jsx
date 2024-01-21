import React from "react";

export default function MenuSection() {
  const menu = [
    { name: "diesh" },
    { name: "Salad" },
    { name: "Pasta" },
    { name: "Drinks" },
    { name: "Pizza" },
  ];

  const menuDetails = [
    { src: "image/menu (1).png " },
    { src: "image/menu (2).png " },
    { src: "image/menu (3).png " },
    { src: "image/menu (4).png " },
    { src: "image/menu (5).png " },
    { src: "image/menu (6).png " },
    { src: "image/menu (7).png " },
    { src: "image/menu (8).png " },
  ];

  return (
    <div className="flex flex-col h-screen justify-start gap-10">
      <div className="font-Righteous flex justify-start items-center xl:mx-[10%] gap-10">
        <p className="text-[35px]">Menu</p>

        {menu.map((item, itemIndex) => (
          <li className="list-none text-[25px]" key={itemIndex}>
            {item.name}
          </li>
        ))}
      </div>

      <div className="h-fit flex w-[90%] 2xl:w-[70%] flex-wrap 2xl:gap-20 xl:gap-10 justify-center 2xl:mx-[10%] items-center overflow-auto font-Inter">
        {menuDetails.map((menu, menuIndex) => (
          <div className="w-[20%] xl:h-[65%] 2xl:h-[46%] bg-white rounded-[10px] shadow-xl">
            <div className="" key={menuIndex}>
              <img src={menu.src} alt="" className="" />
            </div>
            <div className="flex">
              <div className="flex flex-col gap-2 p-[3%] w-[60%]">
                <p className="text-lg">Name of Food</p>

                <p className="flex items-center">
                  <span>
                    <img src="image/clock.png" alt="" className="w-5" />
                  </span>
                  10 min
                </p>

                <p className="">$ 110</p>
              </div>

              <div className="w-[40%] p-[1%] pt-[5%] flex flex-col justify-between">
                <img src="image/rating.svg" alt="" className="w-16" />

                <button className="btn w-full h-[40%]">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
