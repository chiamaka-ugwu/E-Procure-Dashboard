"use client";
import React, { useState } from "react";
import { menuItems } from "../../public/assets/assets";
import Image from "next/image";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="w-53 h-screen fixed bg-white shadow-lg hidden md:block">
        <div className="mx-6 mt-4 font-semibold">E-Procure</div>
        <ul className="flex flex-col gap-1 text-xs font-medium mx-3 mt-4 cursor-pointer ">
          {menuItems.map((menu, index) => (
            <li
              key={menu.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-3 py-2 rounded-sm ${
                activeIndex === index
                  ? "bg-red text-white font-medium"
                  : "text-black"
              }`}
            >
              <span>
                <Image
                  src={activeIndex === index ? menu.iconActive : menu.icon }
                  width={20}
                  alt={`${menu.item} icon`}
                />
              </span>
              <span>{menu.item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
