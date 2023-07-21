"use client";

import React from "react";
import Image from "next/image";


import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathName = usePathname();

  return (
    <header className=" sticky top-0 px-10 py-3 bg-black z-50">
      <nav>
        <div className="flex justify-between  items-center">
          <div className=" w-14  ">
            <Image src="/logo.png" alt="alternatetext" width={60} height={60}></Image>
          </div>

          <ul className="flex list-none m-0 p-0">
            <li className="mr-8">
              <a
                href="/"
                className={` ${
                  pathName === "/" ? " text-red-600" : "hover:text-gray-300"
                } `}
              >
                Home
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/Projects"
                className={` ${
                  pathName === "/Projects"
                    ? "text-red-600"
                    : "hover:text-gray-300"
                }`}
              >
                Projects
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/Skills"
                className={` ${
                  pathName === "/Skills"
                    ? "text-red-600"
                    : "hover:text-gray-300"
                }`}
              >
                Skills
              </a>
            </li>
            <li className="mr-8">
              <a
                href="/Contact"
                className={`${
                  pathName === "/Contact"
                    ? "text-red-600"
                    : "hover:text-gray-300"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
