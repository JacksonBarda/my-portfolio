"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="text-lg font-bold">
          <p>My Portfolio</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="hover:text-custom-grey-text">
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownVisible(true)}

            >
              <Link href="/projects" className="hover:text-custom-grey-text">
                Projects
              </Link>
                <ul
                  className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg transition-opacity duration-300 ${
                    isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseLeave={() => setDropdownVisible(false)}
                  onMouseOut={() => setDropdownVisible(false)}
                >
                  <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">
                    <Link href="/projects/officeduck">Office Duck</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">
                    <Link href="/projects/cdl">CDL</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-200">
                    <Link href="/projects/familyfeud">Family Feud</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/projects/other">Other Projects</Link>
                  </li>
              </ul>
            </li>
            <li>
              <Link href="/links" className="hover:text-custom-grey-text">
                Links
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-custom-grey-text">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
