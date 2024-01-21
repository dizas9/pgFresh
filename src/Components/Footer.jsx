import React from "react";
import { Navdata } from "./Navdata";

export default function Footer() {
  return (
    <>
      <div className="h-fit xl:mt-[4%] px-10 py-10 flex justify-evenly font-Inter bg-bgFooter w-full">
        <div className="w-[30%] flex flex-col gap-5">
          <p className="text-cardBorder text-[25px] font-bold">Fresh Food</p>

          <p className="text-white text-lg text-justify">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printerLorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printerLorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        <div className="w-[25%] flex flex-col gap-5">
          <p className="text-cardBorder text-[25px] font-bold">Quick Links</p>

          <ul className="text-white text-lg ">
            <li className="">FAQ</li>
            <li className="">About</li>
            <li className="">Privacy Policy</li>
            <li className="">Terms & Condition</li>
            <li className="">Support</li>
          </ul>
        </div>

        <div className="w-[25%] flex flex-col gap-5">
          <p className="text-cardBorder text-[25px] font-bold">Contact</p>

          <div className="text-white text-lg text-justify">
            <p className="">
              <span>Hotline :</span> +880 1793-063571
            </p>
            <p className="">
              <span>Email :</span> pgfresh@info.com
            </p>
            <p className="">
              <span>Address :</span> Natore, Chowdhury tower CX6P+HJH, Natore
              6400
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-[5%]">
        <p className="">
          Copyright ©2024,{" "}
          <span className="font-Righteous text-bgFooter">PG grop</span> All
          Rights Reserved.
        </p>
        <p className="">
          Developed By :
          <a href="https://portfolio-v2-sazid.vercel.app/" className="font-thin text-[red]">
            Dizas9
          </a>
        </p>
      </div>
    </>
  );
}

/*


*/