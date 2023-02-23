import Link from "next/link";
import React from "react";

export default function ListMenu() {
  const listMenu = ["Home", "Models", "Harga", "Lokasi", "About"];

  return (
    <div className=" py-6">
      <ul className=" flex items-center flex-col  gap-4 ">
        {listMenu.map((data: any, index: number) => (
          <li
            key={index}
            className="px-3  py-2 rounded-sm transition-all duration-100 hover:drop-shadow-sm hover:text-red-600"
          >
            <Link href={data == "Home" ? "/" : `/${data}`}>
              <h1 className="flex items-center gap-2 font-normal text-lg ">
                {data}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
