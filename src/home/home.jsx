import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Iphone from "@/assets/images/iphone.png";
import Apple from "@/assets/svg/apple.svg";
import ArrowRighticon from "@/assets/svg/arrow-right.svg";
import Card from "@/components/card";

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
  //////////////////////////////////////////

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-01T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer + "Aksiya tugadi");
  }, []);

  return (
    <div>
      <section className="container1">
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
                        {slides.Link} <img src={ArrowRighticon} alt="" />
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
      <section className="container1">
        <div className=" mt-[140px] mb-[40px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]"></div>
            <p className="text-[16px] text-[#DB4444] font-semibold">Today’s</p>
          </div>
          <div className="flex items-end">
            <h2 className="font-semibold text-4xl pt-[24px]">Flash Sales</h2>
            <div className="flex items-center pl-[87px]">
              <div className="flex items-center gap-[17px] mt-[-20px]">
                {["days", "hours", "minutes", "seconds"].map((label, index) => (
                  <React.Fragment key={label}>
                    <div className="flex flex-col">
                      <p className="font-medium text-xs leading-[18px] tracking-[0%] poppins-heading">
                        {label.charAt(0).toUpperCase() + label.slice(1)}
                      </p>
                      <p className="font-bold text-[32px] leading-[30px] tracking-[4%] arial-heading">
                        {String(timeLeft[label]).padStart(2, "0")}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="mt-[25px]">
                        <div className="w-[4px] h-[4px] bg-[#E07575] rounded-full"></div>
                        <div className="w-[4px] h-[4px] mt-1 bg-[#E07575] rounded-full"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center pl-[510px] gap-[8px]">
                <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5] p-3">
                  <ArrowLeft />
                </div>
                <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5] p-3">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card />
      </section>
    </div>
  );
};

export default Home;
