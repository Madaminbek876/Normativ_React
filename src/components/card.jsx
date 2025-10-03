import { Eye, Heart } from "lucide-react";
import React from "react";
import Jostik_red from "@/assets/images/qizil-jostik.png";
import EmptyStar from "@/assets/svg/star-100.svg";
import FullStar from "@/assets/svg/Full-star.svg";
import Rating from "react-rating";
import { Button } from "./ui/button";

const Card = ({ category, img, title, price }) => {
  return (
    <div>
      <div className="w-[270px] h-[350px] mb-[60px] cards">
        <div className="w-[270px] h-[270px] bg-[#F5F5F5]">
          <div className="flex justify-between relative">
            <div className="w-auto h-[26px] bg-[#DB4444] text-white px-[10px] rounded-[4px] mt-[12px] ml-[12px]">
              <p>{category}</p>
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
          <div>
            <img className="mt-[-90px]" src={img} />
            <Button
              className="w-[270px] h-[41px] absolute mt-[-38px] card-button"
              variant="secondary"
            >
              Add To Cart
            </Button>
          </div>
        </div>
        <div className="pt-[16px]">
          <h2 className="font-medium text-base">{title}</h2>
          <div className="flex items-center gap-[12px] pt-[8px] pb-[8px]">
            <p className="font-medium text-base text-[#DB4444]">{price}</p>
            <p className="font-medium text-base line-through text-gray-400">
              {price / 2}
            </p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Rating
              emptySymbol={<img src={EmptyStar} />}
              fullSymbol={<img src={FullStar} />}
            />
            <p>(88)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
