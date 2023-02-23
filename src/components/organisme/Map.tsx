import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Map() {
  return (
    <div className="relative">
      <div className="absolute top-2 right-3">
        <Link href={"/"}>
          <button className="flex items-center gap-4 bg-white px-4 py-1 rounded-sm shadow-lg">
            <FaArrowLeft></FaArrowLeft> Kembali ke Home
          </button>
        </Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.656820950455!2d106.77120100195475!3d-6.55713947653935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe298f8c6d01be1fb!2zNsKwMzMnMjUuOSJTIDEwNsKwNDYnMTguMSJF!5e0!3m2!1sid!2sid!4v1677046555784!5m2!1sid!2sid"
        width="100%"
        height="600"
        loading="lazy"
      ></iframe>
    </div>
  );
}
