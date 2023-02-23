import Image from "next/image";
import React from "react";
import Banner from "../../../public/assets/image/banner-1.jpg";
import Nissan from "../../../public/assets/image/nissan.png";
import Magnite from "../../../public/assets/image/magnite.jpg";
import Terra from "../../../public/assets/image/car-5.jpg";
import Leaf from "../../../public/assets/image/car-3.jpg";

export default function Type() {
  const myLoader = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/Assets_0_NISSAN_KICKS_09_DESKTOP_KICKS_BANNER_0fbc76e946/Assets_0_NISSAN_KICKS_09_DESKTOP_KICKS_BANNER_0fbc76e946.png`;
  };
  const magnite = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/3840x1975_Vehicle_Landing_page_Magnite_min_jpg_ximg_l_12_m_smart_5d48a1e482/3840x1975_Vehicle_Landing_page_Magnite_min_jpg_ximg_l_12_m_smart_5d48a1e482.jpg`;
  };
  const livina = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/static-assets/Home-Banner_Livina_VL-Dekstop_3840x1575px.jpg`;
  };
  const serena = ({ src }: any) => {
    return `https://storage.googleapis.com/prod-nissan-indonesia/static-assets/All-New-Serena-lp.jpg`;
  };
  return (
    <div>
      <div className="w-full mt-4 bg-white">
        <div className="pb-2 border-b flex flex-col">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN KICKS E-POWER
            </h1>
          </div>
          <div className=" p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                loader={myLoader}
                src={Banner}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y ">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr className="">
                    <td>NISSAN KICKS E-POWER ONE TONE</td>
                    <td>Rp.515.000.000</td>
                    <td>Rp.519.000.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN KICKS E-POWER TWO TONE</td>
                    <td>Rp.517.000.000</td>
                    <td>Rp.521.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pb-2 border-b">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN MAGNITE 1.0 TURBO
            </h1>
          </div>
          <div className="p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                loader={magnite}
                src={Magnite}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y text-sm">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr>
                    <td>NISSAN MAGNITE UPPER MT ONE TONE</td>
                    <td>Rp.256.100.000</td>
                    <td>Rp.270.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN MAGNITE UPPER CVT ONE TONE</td>
                    <td>Rp.285.000.000</td>
                    <td>Rp.293.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN MAGNITE PREMIUM MT ONE TONE</td>
                    <td>Rp.281.000.000</td>
                    <td>Rp.281.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN MAGNITE PREMIUM MT TWO TONE</td>
                    <td>Rp.283.000.000</td>
                    <td>Rp.283.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN MAGNITE PREMIUM CVT ONE TONE</td>
                    <td>Rp.293.000.000</td>
                    <td>Rp.301.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NISSAN MAGNITE PREMIUM CVT TWO TONE</td>
                    <td>Rp.295.000.000</td>
                    <td>Rp.303.500.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pb-2 border-b">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN LIVINA
            </h1>
          </div>
          <div className="p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                loader={livina}
                src={Magnite}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y ">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr>
                    <td>NEW NISSAN LIVINA EL MT</td>
                    <td>Rp.272.500.000</td>
                    <td>Rp.279.000.000</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA EL MT (WHITE)</td>
                    <td>Rp.272.000.000</td>
                    <td>Rp.280.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VE AT</td>
                    <td>Rp.298.000.000</td>
                    <td>Rp.303.000.000</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VE AT (WHITE)</td>
                    <td>Rp.299.500.000</td>
                    <td>Rp.304.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VE AT SIGNATURE</td>
                    <td>Rp.307.500.000</td>
                    <td>-</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VE AT SIGNATURE (WHITE)</td>
                    <td>Rp.309.000.000</td>
                    <td>-</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VL AT</td>
                    <td>Rp.308.500.000</td>
                    <td>Rp.313.500.000</td>
                  </tr>
                  <tr className="">
                    <td>NEW NISSAN LIVINA VL AT (WHITE)</td>
                    <td>Rp.310.000.000</td>
                    <td>Rp.315.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pb-2 border-b">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN SERENA C27
            </h1>
          </div>
          <div className="p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                loader={serena}
                src={Magnite}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y ">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr>
                    <td>SERENA C27 HWS ONE TONE</td>
                    <td>Rp.534.300.000</td>
                    <td>Rp.538.300.000</td>
                  </tr>
                  <tr>
                    <td>SERENA C27 HWS TWO TONE</td>
                    <td>Rp.536.800.000</td>
                    <td>Rp.541.800.000</td>
                  </tr>
                  <tr>
                    <td>SERENA C27 HWS ONE TONE (IMPULS)</td>
                    <td>Rp.544.300.000</td>
                    <td>Rp.549.300.000</td>
                  </tr>
                  <tr>
                    <td>SERENA C27 HWS TWO TONE (IMPULS)</td>
                    <td>Rp.546.800.000</td>
                    <td>Rp.551.800.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pb-2 border-b">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN TERRA 2.5 DIESEL TURBO
            </h1>
          </div>
          <div className="p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                src={Terra}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y ">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr>
                    <td>ESTIMASI HARGA</td>
                    <td>-</td>
                    <td>Rp.725.000.000 s/d Rp.750.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="pb-2 border-b">
          <div className="flex justify-center">
            <h1 className="text-xl border-y mt-6 mb-4">
              ALL NEW NISSAN LEAF (ELECTRIC VEHICLE)
            </h1>
          </div>
          <div className="p-4 flex flex-col lg:flex-row">
            <div className="relative">
              <Image
                src={Leaf}
                alt="image"
                width={100}
                height={100}
                className=" w-[500px] h-auto"
              ></Image>
              <div className="absolute top-3 left-3">
                <Image
                  src={Nissan}
                  alt="image"
                  width={100}
                  height={100}
                  className="relative w-10 h-auto"
                ></Image>
              </div>
            </div>
            <div className="lg:ml-10 flex-auto text-center">
              <table className="w-full mt-4">
                <thead className="text-md lg:text-xl">
                  <tr className="border-y ">
                    <th className="p-2">TYPE</th>
                    <th>OTR JAKARTA NIK 2022</th>
                    <th>OTR JAKARTA NIK 2023</th>
                  </tr>
                </thead>
                <tbody className="text-sm lg:text-lg">
                  <tr>
                    <td>ALL NEW NISSAN LEAF ONE TONE (ELECTRIC VEHICLE)</td>
                    <td>Rp.728.000.000</td>
                    <td>Rp.738.000.000</td>
                  </tr>
                  <tr>
                    <td>ALL NEW NISSAN LEAF TWO TONE (ELECTRIC VEHICLE)</td>
                    <td>Rp.730.000.000</td>
                    <td>Rp.740.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
