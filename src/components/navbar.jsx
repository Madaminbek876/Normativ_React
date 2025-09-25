import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/svg/Logo.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleX,
  Heart,
  LogOut,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import "@/index.css";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black text-white h-[48px]">
        <div className="container mx-auto flex justify-center py-[7px]">
          <div className="flex gap-[8px] items-center">
            <p className="ml-[250px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link className="font-semibold text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%]">
              ShopNow
            </Link>
          </div>
          <div className="ml-[231px]">
            <Select>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Russian">Russian</SelectItem>
                  <SelectItem value="Uzbek">Uzbek</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <nav className="container mx-auto flex justify-center items-center pt-[40px]">
        <img src={Logo} />
        <ul className="flex gap-[48px] pl-[150px] pr-[140px]">
          <li>
            <Link className="text-[16px]">Home</Link>
          </li>
          <li>
            <Link className="text-[16px]">Contact</Link>
          </li>
          <li>
            <Link className="text-[16px]">About</Link>
          </li>
          <li>
            <Link className="text-[16px]">Sign Up</Link>
          </li>
        </ul>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center">
            <input
              className="w-[243px] h-[38px] pl-[20px] rounded-[4px] bg-[#F5F5F5] border-none outline-none relative text-[12px]"
              type="text"
              placeholder="What are you looking for?"
            />
            <Search className="relative right-[40px]" />
          </div>
          <div className="flex items-center gap-[16px] mr-[35px]">
            <Heart />
            <ShoppingCart />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex gap-[16px]">
                    <User />
                    <Link>Manage My Account</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-[16px]">
                    <ShoppingBag />
                    <Link>My Order</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-[16px]">
                    <CircleX />
                    <Link>My Cancellations</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-[16px]">
                    <Star />
                    <Link>My Reviews</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex gap-[16px]">
                    <LogOut />
                    <Link>Logout</Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="border bottom mt-[16px]"></div>
    </div>
  );
};

export default Navbar;
