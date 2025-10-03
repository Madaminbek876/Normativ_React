import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Iphone from "@/assets/images/iphone.png";
import Apple from "@/assets/svg/apple.svg";
import ArrowRighticon from "@/assets/svg/arrow-right.svg";
import Card from "@/components/card";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Home = () => {
  const slides = [
    {
      id: 1,
      logo: Apple,
      desc: "Iphone 14 Series",
      image: Iphone,
      Link: "Shop Now",
      bgColor: "bg-black",
    },
    {
      id: 2,
      logo: Apple,
      desc: "Iphone 16 Series",
      image: Iphone,
      Link: "Buy Now",
      bgColor: "bg-black",
    },
    {
      id: 3,
      logo: Apple,
      desc: "Iphone 17 Series",
      image: Iphone,
      Link: "Shop Now",
      bgColor: "bg-black",
    },
  ];
  const [currentindex, setcurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  //////////////////////////////////////////

  const targetDate =
    Date.now() +
    3 * 24 * 60 * 60 * 1000 +
    23 * 60 * 60 * 1000 +
    19 * 60 * 1000 +
    56 * 1000;

  const calculateTimeLeft = () => {
    const difference = targetDate - Date.now();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  ///////////////////////////////////
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?limit=5&offset=0")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
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
              style={{ transform: `translateX(-${currentindex * 100}%)` }}
            >
              {slides.map((slides) => (
                <div
                  key={slides.id}
                  className={`flex gap-[38px] flex-shrink-0 w-[892px] h-[344px] ${slides.bgColor}`}
                >
                  <div>
                    <div className="flex items-center gap-[24px] pt-[58px] pl-[64px]">
                      <img src={slides.logo} />
                      <p className="font-normal text-base leading-6 tracking-[0%] text-white">
                        {slides.desc}
                      </p>
                    </div>
                    <p className="text-white pt-[20px] pl-[64px] font-semibold text-5xl leading-[60px] tracking-[4%]">
                      Up to 10% <br /> off Voucher
                    </p>
                    <div className="mt-[22px] ml-[67px]">
                      <Link
                        to="/"
                        className="text-white gap-2 flex items-center font-medium text-base leading-6 tracking-[0%] text-center underline"
                      >
                        {slides.Link} <img src={ArrowRighticon} />
                      </Link>
                    </div>
                  </div>
                  <img className="pt-[16px]" src={slides.image} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[8px]">
              {" "}
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setcurrentIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    currentindex === i ? "bg-red-500" : "bg-gray-400"
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
            <p className="text-[16px] text-[#DB4444] font-bold">Today’s</p>
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
        <section className="container mx-auto mt-10">
          <div className="flex gap-[30px] skrolX">
            {products.map((item) => (
              <Card
                key={item.id}
                category={item.category.name}
                title={item.title}
                price={item.price}
                img={item.images[0]}
              />
            ))}
          </div>
        </section>
        <Button className="w-[234px] h-[56px] text-[16px] ml-[468px] mt-[40px]">
          <Link>View All Products</Link>
        </Button>
        <div className="border bottom mt-[60px] mb-[80px]"></div>
      </section>
    </div>
  );
};

export default Home;
