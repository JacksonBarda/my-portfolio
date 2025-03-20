import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import NavBar from "./ui/NavBar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <section className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Hi, I'm Jack! A passionate web developer creating modern and responsive web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            View Projects
          </Link>
          <Link
            href="contact"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
      <section className="mt-16">
        <Image
          src="/Profile-Picture.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-blue-500 shadow-lg"
        />
      </section>
    </div>
  );
}
