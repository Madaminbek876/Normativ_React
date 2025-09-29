import { ArrowRight, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const slides = [
    {
      id: 1,
      logo: "src/assets/svg/apple.svg",
      desc: "iPhone 14 Series",
      image: "src/assets/images/iphone.png",
      Link: "Shop Now",
    },
    {
      id: 2,
      logo: "src/assets/svg/apple.svg",
      desc: "iPhone 16 Series",
      image: "src/assets/images/iphone 16.jpg",
      Link: "Buy Now",
    },
    {
      id: 3,
      logo: "src/assets/svg/apple.svg",
      desc: "iPhone 17 Series",
      image: "src/assets/images/iphone 17.jpg",
      Link: "Shop Now",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((item) => (item === slides.length - 1 ? 0 : item + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);
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
          <div className="relative w-[892px] h-[344px] mt-[40px] bg-black">
            <div className="flex h-full">
              <div className="w-1/2 flex flex-col justify-center pl-[64px] items-start text-white px-8">
                <h3 className="flex items-center gap-[24px] text-lg font-semibold mb-2">
                  <img src={slides[index].logo} />
                  <p>{slides[index].desc}</p>
                </h3>
                <h2 className="text-[48px] font-bold mb-4">
                  <h1>
                    Up to 10% <br /> off Voucher
                  </h1>
                  <h1>hdej</h1>
                </h2>
                <div className="flex items-center gap-[12px]">
                  <Link className="underline">{slides[index].Link}</Link>
                  <ArrowRight />
                </div>
              </div>
              <div className="w-1/2 flex justify-center items-center">
                <img
                  src={slides[index].image}
                  srс={slides[index].image}
                  alt={slides[index].title}
                  className="h-full object-contain"
                />
              </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-[8px]">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    index === i ? "bg-red-500" : "bg-gray-400"
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
