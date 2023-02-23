import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" text-white flex flex-col lg:flex-row justify-around bg-gray-800 p-4 ">
        <div className="lg:w-[500px] mt-4">
          <h3 className="text-xl">
            HUBUNGI KAMI :{" "}
            <Link href={"https://wa.me/c/6287873391587"}>
              <span className="hover:underline">087873391587</span>
            </Link>
          </h3>
          <h3>Senin - Sabtu 09.00AM s/d 18.00PM</h3>
          <h1 className="text-lg mt-6 lg:mt-2">
            DAPATKAN INFORMASI TERKINI DARI INDOMOBIL NISSAN YASMIN
          </h1>
          <Link href={"Lokasi"}>
            <button className="px-4 py-2 bg-gray-600 border-2 border-gray-700">
              Lihat lokasi
            </button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-4 space-y-4 lg:space-y-0 lg:space-x-12">
          <div>
            <h1 className="text-lg font-bold">BUY</h1>
            <ul className="mt-2  space-y-2">
              <li>Promotions</li>
              <li>Dealers</li>
              <li>Download Brosur</li>
              <li>Hubungi Kami</li>
              <li>Honda Technology</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-bold">AFTERSALES</h1>
            <ul className="mt-2  space-y-2">
              <li>Tips & Trick</li>
              <li>Communities</li>
              <li>Social Media Network</li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-bold">NISSAN</h1>
            <ul className="mt-2  space-y-2">
              <li>Corporate</li>
              <li>Treandsetter</li>
              <li>News</li>
              <li>Press Release</li>
              <li>Motorspot</li>
              <li>Carrer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] pl-12 bg-gray-900 flex items-center text-gray-600">
        Copyright © 2023 Indomobil Nissan Yasmin Website
      </div>
    </div>
  );
}
