import Image from "next/image";
import React from "react";
import car1 from "../../../public/assets/image/car-1.png";
import car2 from "../../../public/assets/image/car-2.jpeg";
import car3 from "../../../public/assets/image/car-3.jpg";
import car4 from "../../../public/assets/image/car-4.png";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-gray-100 ">
      <h1 className="flex flex-col text-lg lg:text-3xl font-bold lg:w-full text-start ml-6 pt-8">
        <span className="text-sm">JELAJAHI NISSAN</span>
        PRODUK UNGGULAN KAMI
      </h1>
      <div className="grid text-center gap-4 px-6 pt-6 grid-cols-2 lg:grid-cols-3 pb-6">
        <div className="flex flex-col justify-center h-auto bg-white text-center rounded-md shadow-md hover:shadow-xl">
          <Image
            src={car1}
            alt="blog"
            width={100}
            height={100}
            className="w-auto mx-4 "
          ></Image>
          <h1 className="text-lg lg:text-2xl font-bold">NISSAN MAGITE</h1>
          <button className="lg:border-2 lg:border-gray-900 lg:hover:border-none my-2 lg:mx-8 w-auto lg:hover:bg-red-600 lg:hover:text-white transition-all duration-150 rounded-full">
            <Link href={"Harga"}>
              <p className="text-xs">HARGA MULAI DARI</p>
              <h1 className="text-lg font-bold">Rp.270.500.000</h1>
            </Link>
          </button>
        </div>
        <div className="flex flex-col justify-center h-auto bg-white text-center rounded-md shadow-md hover:shadow-xl">
          <Image
            src={car2}
            alt="blog"
            width={100}
            height={100}
            className="w-auto mx-4 "
          ></Image>
          <h1 className="text-lg lg:text-2xl font-bold">NISSAN LIVINA</h1>
          <button className="lg:border-2 lg:border-gray-900 lg:hover:border-none my-2 lg:mx-8 w-auto lg:hover:bg-red-600 lg:hover:text-white transition-all duration-150 rounded-full">
            <Link href={"Harga"}>
              <p className="text-xs">HARGA MULAI DARI</p>
              <h1 className="text-lg font-bold">Rp.279.000.000</h1>
            </Link>
          </button>
        </div>
        <div className="flex  flex-col justify-center h-auto bg-white text-center rounded-md shadow-md hover:shadow-xl">
          <Image
            src={car3}
            alt="blog"
            width={100}
            height={100}
            className="w-auto mx-4 "
          ></Image>
          <h1 className="text-lg lg:text-2xl font-bold">NISSAN LEAF</h1>
          <button className="lg:border-2 lg:border-gray-900 lg:hover:border-none my-2 lg:mx-8 w-auto lg:hover:bg-red-600 lg:hover:text-white transition-all duration-150 rounded-full">
            <Link href={"Harga"}>
              <p className="text-xs">HARGA MULAI DARI</p>
              <h1 className="text-lg font-bold">Rp.738.000.000</h1>
            </Link>
          </button>
        </div>
        <div className="flex lg:hidden flex-col justify-center h-auto bg-white text-center rounded-md shadow-md hover:shadow-xl">
          <Image
            src={car4}
            alt="blog"
            width={100}
            height={100}
            className="w-auto mx-4 "
          ></Image>
          <h1 className="text-lg lg:text-2xl font-bold">NISSAN KICKS</h1>
          <button className="lg:border-2 lg:border-gray-900 lg:hover:border-none my-2 lg:mx-8 w-auto lg:hover:bg-red-600 lg:hover:text-white transition-all duration-150 rounded-full">
            <Link href={"Harga"}>
              <p className="text-xs">HARGA MULAI DARI</p>
              <h1 className="text-lg font-bold">Rp.519.000.000</h1>
            </Link>
          </button>
        </div>
      </div>
      <Link href={"Models"}>
        <button className="hover:underline text-lg font-bold w-full text-center mb-6 pt-6">
          Lihat semua <span className="text-red-700">Mobil</span>
        </button>
      </Link>
    </div>
  );
}
