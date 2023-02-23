import React from "react";
import Header from "@/components/organisme/Header";
import Sidebar from "@/components/organisme/Sidebar";
import Messages from "@/components/organisme/Messages";
import Footer from "@/components/organisme/Footer";
import Map from "@/components/organisme/Map";

export default function Lokasi() {
  return (
    <div>
      <Header></Header>
      <Map></Map>
      <Footer></Footer>
      <Messages></Messages>
    </div>
  );
}
