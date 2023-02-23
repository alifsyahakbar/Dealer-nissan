import React from "react";
import ListMenu from "../atom/ListMenu";

export default function MenuSidebar() {
  return (
    <div className="absolute text-center rounded-sm z-10 top-[69px] -right-7 w-screen h-auto border-t-2 border-slate-800  bg-white  overflow-hidden drop-shadow-[0_70px_35px_rgba(0,0,0,0.25)]">
      <ListMenu></ListMenu>
    </div>
  );
}
