"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
  { name: "Culture", href: "/culture" },
  { name: "Media Gallery", href: "/media" },
  { name: "History", href: "/history" },
  { name: "Niwadi Special", href: "/niwadi-special" },
  { name: "Niwadi Maati", href: "/niwadi-matti" },
  { name: "Niwadi E-Patrika", href: "/e-patrika" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Image
            src="/logo.png"
            alt="Hum Niwadi Logo"
            width={36}
            height={36}
          />
          <span className="text-lg font-bold">
            Hum Niwadi
          </span>
        </Link>

        {/* Navigation links */}
        <div className="flex gap-5 text-sm font-medium overflow-x-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 whitespace-nowrap ${
                pathname === link.href
                  ? "text-green-700 border-b-2 border-green-700"
                  : "text-neutral-700 hover:text-green-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
