import Image from "next/image";
import Slide2 from "../../../public/assets/image/slide-2.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function Slide() {
  const myLoader = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/1500_X_750_Kicks_2022_e_Power_Homepage_copy_1_0cd96abf8a/1500_X_750_Kicks_2022_e_Power_Homepage_copy_1_0cd96abf8a.jpg`;
  };
  return (
    <div className="relative mt-4">
      <Image
        priority
        unoptimized={true}
        src={Slide2}
        loader={myLoader}
        alt="banner"
        width={100}
        height={100}
        className="w-full h-auto"
      ></Image>
      <div className="lg:hidden flex">
        <div className="   h-auto w-[450px] bg-[#0e1923] p-4">
          <div className="flex text-white items-start flex-col z-30 opacity-100">
            <h1 className="text-4xl my-5">
              NELECTRIFIED MOBILITY WITH AN INGENIOUS TWIST
            </h1>
            <h4 className="mb-4">
              Masa depan kini berada di genggaman Anda. Sistem e-POWER ciptaan
              Nissan adalah teknologi penggerak listrik mutakhir yang lahir dari
              semangat inovasi Nissan yang bertemu dengan pengalaman
              mengembangkan kendaraan listrik sejak 1947. Teknologi ini menjadi
              yang pertama di Indonesia di mana mesin bensin 1.2L hanya
              berfungsi untuk mengisi daya baterai (charging) secara otomatis
              ketika diperlukan, dan roda digerakkan 100% oleh motor listrik.
            </h4>
            <button className="flex items-center gap-2 p-2 px-4 bg-red-700 mb-4 group hover:bg-red-800 transition-all duration-200">
              LIHAT SELENGKAPNYA{" "}
              <div className="group-hover:translate-x-1 transition-all duration-200">
                <FaAngleRight></FaAngleRight>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block left-16 bottom-[80px] h-auto w-[450px] backdrop-brightness-50 bg-black/5 rounded-sm bg-black p-4">
        <div className="flex text-white items-start flex-col z-30 opacity-100">
          <h1 className="text-4xl my-5">
            NELECTRIFIED MOBILITY WITH AN INGENIOUS TWIST
          </h1>
          <h4 className="mb-4">
            Masa depan kini berada di genggaman Anda. Sistem e-POWER ciptaan
            Nissan adalah teknologi penggerak listrik mutakhir yang lahir dari
            semangat inovasi Nissan yang bertemu dengan pengalaman mengembangkan
            kendaraan listrik sejak 1947. Teknologi ini menjadi yang pertama di
            Indonesia di mana mesin bensin 1.2L hanya berfungsi untuk mengisi
            daya baterai (charging) secara otomatis ketika diperlukan, dan roda
            digerakkan 100% oleh motor listrik.
          </h4>
          <button className="flex items-center gap-2 p-2 px-4 bg-red-700 mb-4 group hover:bg-red-800 transition-all duration-200">
            LIHAT SELENGKAPNYA{" "}
            <div className="group-hover:translate-x-1 transition-all duration-200">
              <FaAngleRight></FaAngleRight>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
