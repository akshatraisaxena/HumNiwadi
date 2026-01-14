"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const slides = ["/Neem.jpg", "/Neem2.jpg", "/Neem3.jpg"];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.hero}>
      {slides.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <Image
            src={src}
            alt="Niwadi Hero"
            fill
            priority={index === 0}
            sizes="100vw"
            quality={90}
            className={styles.image}
          />
        </div>
      ))}

      {/* Overlay Text */}
      <div className={styles.overlay}>
        <div className={styles.text}>
          Bringing you authentic news, rich culture, and inspiring stories from
          the heart of Niwadi
        </div>
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        ‹
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        ›
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.dotActive : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
