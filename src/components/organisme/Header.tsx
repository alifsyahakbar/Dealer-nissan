import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/image/logo.png";
import NissanLogo from "../../../public/assets/image/nissan-logo.jpg";
import Large from "../../../public/assets/image/logo-large.png";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import MenuBar from "../atom/MenuBar";

export default function Header() {
  const listMenu = ["Home", "Models", "Harga", "Lokasi", "About"];

  const [positionHeader, setpositionHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 120) {
        setpositionHeader("w-full fixed top-0");
      } else {
        setpositionHeader("");
      }
    });
  });

  return (
    <div className={` z-20 ${positionHeader}`}>
      <div className=" bg-white py-2 w-full lg:pl-2 border-b-2 shadow-sm pr-4  flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            priority
            unoptimized={true}
            src={NissanLogo}
            alt="logo"
            width={100}
            height={100}
            className="w-[50px] lg:w-[70px] h-auto ml-6"
          ></Image>
        </div>
        <div className="flex items-center">
          <ul className="hidden lg:flex gap-4">
            {listMenu.map((data: any, index: number) => (
              <li
                key={index}
                className="px-3  py-2 rounded-sm transition-all duration-100 hover:drop-shadow-sm hover:text-red-600"
              >
                <Link href={data == "Home" ? "/" : `/${data}`}>
                  <h1 className="flex items-center gap-2 font-normal text-lg ">
                    {data} <FaChevronDown size={15}></FaChevronDown>
                  </h1>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center ml-4">
            <Image
              priority
              unoptimized={true}
              src={Large}
              alt="logo"
              width={100}
              height={100}
              className="w-22 h-auto mr-8 lg:mr-0"
            ></Image>
            <Image
              priority
              unoptimized={true}
              src={Logo}
              alt="logo"
              width={100}
              height={100}
              className="w-[70px] h-auto hidden md:block"
            ></Image>
          </div>
        </div>
        <div className="lg:hidden mr-2">
          <MenuBar></MenuBar>
        </div>
      </div>
    </div>
  );
}
