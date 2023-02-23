import Image from "next/image";
import Banner from "../../../public/assets/image/banner-1.jpg";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";

export default function Slide() {
  const myLoader = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/Assets_0_NISSAN_KICKS_09_DESKTOP_KICKS_BANNER_0fbc76e946/Assets_0_NISSAN_KICKS_09_DESKTOP_KICKS_BANNER_0fbc76e946.png`;
  };
  return (
    <div className="relative">
      <Image
        priority
        unoptimized={true}
        src={Banner}
        loader={myLoader}
        alt="Hero-banner"
        width={100}
        height={100}
        className="w-full h-auto"
      ></Image>
      <div className="lg:hidden flex">
        <div className="left-16 bottom-[80px] h-auto w-[450px]  rounded-sm bg-[#363638] p-4">
          <div className="flex text-white items-start flex-col z-30 opacity-100">
            <h4 className="text-md">
              A FULL ELECTRIC VEHICLE EXPERIENCE WITHOUT CHARGING
            </h4>
            <h1 className="text-4xl my-5">NEW NISSAN KICKS</h1>
            <h1 className="text-4xl mb-5">e-POWER</h1>
            <h4 className="mb-4">Harga Mulai Rp.519.000.000</h4>
            <button
              onClick={() => alert("Coming Soon")}
              className="flex items-center gap-2 p-2 px-4 bg-red-700 mb-4 group hover:bg-red-800 transition-all duration-200"
            >
              DOWNLOAD BROCHURE{" "}
              <div className="group-hover:translate-x-1 transition-all duration-200">
                <FaAngleRight></FaAngleRight>
              </div>
            </button>
            <button className="flex items-center gap-2 p-2 px-4 bg-white group text-black hover:text-red-700 transition-all duration-150">
              <Link href={"Models"} className="flex items-center gap-2">
                Lihat Mobil
                <div className="group-hover:translate-x-1 transition-all duration-200">
                  <FaAngleRight></FaAngleRight>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block left-16 bottom-[80px] h-auto w-[450px] backdrop-brightness-50 bg-black/5 rounded-sm bg-black p-4">
        <div className="flex text-white items-start flex-col z-30 opacity-100">
          <h4 className="text-md">
            A FULL ELECTRIC VEHICLE EXPERIENCE WITHOUT CHARGING
          </h4>
          <h1 className="text-4xl my-5">NEW NISSAN KICKS</h1>
          <h1 className="text-4xl mb-5">e-POWER</h1>
          <h4 className="mb-4">Harga Mulai Rp.519.000.000</h4>
          <button
            onClick={() => alert("Coming Soon")}
            className="flex items-center gap-2 p-2 px-4 bg-red-700 mb-4 group hover:bg-red-800 transition-all duration-200"
          >
            DOWNLOAD BROCHURE{" "}
            <div className="group-hover:translate-x-1 transition-all duration-200">
              <FaAngleRight></FaAngleRight>
            </div>
          </button>
          <button className="flex items-center gap-2 p-2 px-4 bg-white group text-black hover:text-red-700 transition-all duration-150">
            <Link href={"Models"} className="flex items-center gap-2">
              Lihat Mobil
              <div className="group-hover:translate-x-1 transition-all duration-200">
                <FaAngleRight></FaAngleRight>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
