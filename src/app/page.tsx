import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className = 'border-2 border-black flex justify-end content-evenly h-16'>
          <ul className = "border-1 border-red-400 flex flex-row justify-evenly items-center w-1/3">
            <li>Home</li>
            <li>Projects</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
      </div>
    </>
  );
}
