import Image from "next/image";
import Banner from "../../../public/assets/image/banner-2.jpg";
import { FaAngleRight } from "react-icons/fa";

export default function Slide3() {
  const myLoader = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/NISSAN_LEAF_BANNER_DESKTOP_ee29e32e71/NISSAN_LEAF_BANNER_DESKTOP_ee29e32e71.jpg`;
  };
  return (
    <div className="relative">
      <Image
        priority
        unoptimized={true}
        src={Banner}
        loader={myLoader}
        alt="banner"
        width={100}
        height={100}
        className="w-full h-auto"
      ></Image>
    </div>
  );
}
