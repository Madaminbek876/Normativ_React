import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Iphone from "@/assets/images/iphone.png";
import Apple from "@/assets/svg/apple.svg";
import ArrowRight from "@/assets/svg/arrow-right.svg";

const Home = () => {
  const slides = [
    {
      id: 1,
      logo: Apple,
      desc: "iPhone 14 Series",
      image: Iphone,
      Link: "Shop Now",
      bgColor: "bg-black",
    },
    {
      id: 2,
      logo: Apple,
      desc: "iPhone 16 Series",
      image: Iphone,
      Link: "Buy Now",
      bgColor: "bg-black",
    },
    {
      id: 3,
      logo: Apple,
      desc: "iPhone 17 Series",
      image: Iphone,
      Link: "Shop Now",
      bgColor: "bg-black",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <section className="container mx-auto">
        <div className="flex items-center">
          <nav className="mt-[40px]">
            <ul>
              <li className="flex items-center gap-[51px]">
                <Link>Woman’s Fashion</Link>
                <ChevronRight />
              </li>
              <li className="flex items-center gap-[73px] pt-[16px]">
                <Link>Men’s Fashion</Link>
                <ChevronRight />
              </li>
              <li className="pt-[16px]">
                <Link>Electronics</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Home & Lifestyle</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Medicine</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Sports & Outdoor</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Baby’s & Toys</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Groceries & Pets</Link>
              </li>
              <li className="pt-[16px]">
                <Link>Health & Beaut</Link>
              </li>
            </ul>
          </nav>
          <div className="border 1px solid h-[384px] ml-[10px] mr-[30px] "></div>
          <div className="w-[892px] h-[344px] overflow-hidden relative ml-[20px] mt-[40px]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slides) => (
                <div
                  key={slides.id}
                  className={`flex gap-[38px] flex-shrink-0 w-[892px] h-[344px] ${slides.bgColor}`}
                >
                  <div>
                    <div className="flex items-center gap-[24px] pt-[58px] pl-[64px]">
                      <img src={slides.logo} alt="" />
                      <p className="font-normal text-base leading-6 tracking-[0%] poppins-heading text-white">
                        {slides.desc}
                      </p>
                    </div>
                    <p className="text-white pt-[20px] pl-[64px] font-semibold text-5xl leading-[60px] tracking-[4%] arial-heading">
                      Up to 10% <br /> off Vouchers
                    </p>
                    <div className="mt-[22px] ml-[67px]">
                      <Link
                        to="/"
                        className="text-white poppins-heading gap-2 flex items-center font-medium text-base leading-6 tracking-[0%] text-center underline"
                      >
                        {slides.Link} <img src={ArrowRight} alt="" />
                      </Link>
                    </div>
                  </div>
                  <img className="pt-[16px]" src={slides.image} alt="" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[8px]">
              {" "}
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === i ? "bg-red-500" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
