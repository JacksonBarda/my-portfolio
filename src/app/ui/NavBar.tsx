import Image from "next/image";

import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className = 'border-2 border-black flex justify-end content-evenly h-16'>
          <ul className = "border-1 border-red-400 flex flex-row justify-evenly items-center w-1/3">
            <li><Link href="/home" >Home</Link></li>
            <li className="relative group">
              <Link href="/projects">Projects</Link>
              <ul className="absolute opacity-0 hover:opacity-100 hover:animate-dropdown bg-white border border-gray-300 mt-1">
              <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-300 rounded-md">
                <Link href="/projects/web">Office Duck</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-300 rounded-md">
                <Link href="/projects/mobile">CDL</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 border-b border-gray-300 rounded-md">
                <Link href="/projects/mobile">Family Feud</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 rounded-md">
                <Link href="/projects/other">Other Projects</Link>
              </li>
              </ul>
            </li>
            <li><Link href="/links" >Links</Link></li>
            <li><Link href="/contact" >Contact</Link></li>
          </ul>
      </div>
    </>
  );
}
