import { Eye, Heart } from "lucide-react";
import React from "react";
import Jostik_red from "@/assets/images/qizil-jostik.png";

const Card = ({ sale, img, title, price }) => {
  return (
    <div>
      <div className="w-[270px] h-[350px]">
        <div className="w-[270px] h-[250px] bg-[#F5F5F5] relative">
          <div className="flex justify-between relative">
            <div className="w-[55px] h-[26px] bg-[#DB4444] text-white px-[10px] pt-[1px] rounded-[4px] mt-[12px] ml-[12px]">
              <p>-40%</p>
            </div>
            <div className="mr-[12px] mt-[12px]">
              <div className="w-[34px] h-[34px] rounded-full bg-white px-[5px] py-[5px] mb-[8px]">
                <Heart />
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-white px-[5px] py-[5px]">
                <Eye />
              </div>
            </div>
          </div>
          <img className=" absolute mt-[-50px] ml-[50px]" src={Jostik_red} />
        </div>
        <div>
          <h2>HAVIT HV-G92 Gamepad</h2>
          <div>
            <p>$120</p>
            <p>160$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
