"use client";
import React, { useState } from "react";
import { menuItems } from "../../public/assets/assets";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="w-50 h-screen fixed bg-white shadow-lg hidden md:block">
        <div className="mx-6 mt-4 font-semibold">E-Procure</div>
        <ul className="flex flex-col gap-1 text-xs font-medium mx-4 mt-4 cursor-pointer">
          {menuItems.map((item, idx) => (
            <li
              key={item}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-2 rounded-sm ${
                activeIndex === idx
                  ? "bg-red text-white font-medium"
                  : "text-black"
              }`}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
