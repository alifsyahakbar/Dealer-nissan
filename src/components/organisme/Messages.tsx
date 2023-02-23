import React from "react";
import cs from "../../../public/assets/image/cs.png";
import Image from "next/image";
import Link from "next/link";

export default function Messages() {
  return (
    <div>
      <div className="fixed right-5 bottom-5 z-50  group ">
        <Link href={"https://wa.me/c/6287873391587"}>
          <div className="relative bg-white rounded-full group">
            <Image
              src={cs}
              alt="cs"
              width={100}
              height={100}
              className="rounded-full border-2 border-red-800 w-20 lg:w-24"
            ></Image>
            <div className="absolute  bottom-1 bg-slate-200 px-2 right-2 rounded-lg">
              <h1 className="text-xs">Let's Chat</h1>
            </div>
            <div className="absolute hidden lg:block hover:invisible  -left-36 -z-20 top-7 bg-slate-200 px-4 py-1 rounded-md">
              <h1>Punya pertanyaan?</h1>
              <h1>Yuk tanya CS</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
