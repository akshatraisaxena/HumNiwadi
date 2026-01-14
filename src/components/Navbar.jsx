"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

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
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Hum Niwadi Logo" width={36} height={36} />
          <span className={styles.logoText}>Hum Niwadi</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
