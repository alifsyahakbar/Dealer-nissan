import React from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import MenuSidebar from "../molekul/MenuSidebar";

export default function MenuBar() {
  const [open, setOpen] = useState(false);
  const toggleMenuBar = () => {
    setOpen(!open);
  };

  const container = {
    hidden: { opacity: 1, x: -90 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div>
      <div className="relative z-50  py-1 lg:hidden w-full">
        <AnimatePresence>
          {open && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{
                x: -300,
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
              }}
              className="w-full"
            >
              <MenuSidebar></MenuSidebar>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between my-2 items-center">
          <div className=" ml-4 rounded-md">
            <button
              onClick={toggleMenuBar}
              className={`text-black  p-1 rounded-md ${
                open ? "rotate-90 " : "-rotate-30"
              } transition-all duration-150`}
            >
              {open ? (
                <MdOutlineClose size={25}></MdOutlineClose>
              ) : (
                <CgMenuLeftAlt size={25} className="rotate-180"></CgMenuLeftAlt>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
