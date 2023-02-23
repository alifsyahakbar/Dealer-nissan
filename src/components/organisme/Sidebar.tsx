import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaSearchLocation,
  FaBook,
  FaCalculator,
} from "react-icons/fa";

export default function Sidebar() {
  const [positionHeader, setpositionHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 130) {
        setpositionHeader(
          "h-auto -right-[190px] fixed bg-white bottom-[120px] lg:top-[120px] transition-all translate-x-1 duration-300 ease-in"
        );
      } else {
        setpositionHeader("");
      }
    });
  });
  return (
    <div className={`${positionHeader} px-2 rounded-md group hover:right-0 `}>
      <div className="p-4 text-red-500">
        <ul className="flex flex-col gap-4 ">
          <li className="mb-2">
            <Link href={"https://wa.me/c/6287873391587"}>
              <h1 className="flex items-center gap-10 text-lg hover:text-black">
                <FaPhoneAlt size={20}></FaPhoneAlt> HUBUNGI SAYA
              </h1>
            </Link>
          </li>
          <li className="mb-2 ">
            <Link href={"Lokasi"}>
              <h1 className="flex items-center gap-10 text-lg hover:text-black">
                <FaSearchLocation size={20}></FaSearchLocation> LIHAT LOKASI
              </h1>
            </Link>
          </li>
          <li className="mb-2 ">
            <button onClick={() => alert("Coming Soon")}>
              <h1 className="flex items-center gap-10 text-lg hover:text-black">
                <FaBook size={20}></FaBook> DOWNLOAD BROSUR
              </h1>
            </button>
          </li>
          <li className="mb-2 ">
            <button onClick={() => alert("Coming Soon")}>
              <h1 className="flex items-center gap-10 text-lg hover:text-black">
                <FaCalculator size={20}></FaCalculator> SIMULASI HARGA
              </h1>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
