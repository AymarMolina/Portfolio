"use client";
import Link from "next/link";

export default function Navbar() {
  const items = ["About", "Experience", "Education", "Skills", "Projects"];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center text-gray-300 space-x-6 text-sm tracking-wider">
      {items.map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-white transition-colors"
        >
          {item}
        </Link>
      ))}
    </header>
  );
}
