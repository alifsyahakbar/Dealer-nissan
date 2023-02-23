import Header from "@/components/organisme/Header";
import Sidebar from "@/components/organisme/Sidebar";
import Slide from "@/components/organisme/Slide";
import Slide3 from "@/components/organisme/Slide3";
import React from "react";
import Blog2 from "@/components/organisme/Blog2";
import Footer from "@/components/organisme/Footer";
import Messages from "@/components/organisme/Messages";

export default function Models() {
  return (
    <div>
      <Header></Header>
      <Slide3></Slide3>
      <Blog2></Blog2>
      <Sidebar></Sidebar>
      <Footer></Footer>
      <Messages></Messages>
    </div>
  );
}
