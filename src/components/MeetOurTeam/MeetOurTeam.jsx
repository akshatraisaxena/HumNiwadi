"use client";

import { useEffect, useRef } from "react";
import styles from "./MeetOurTeam.module.css";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import PeopleCard from "@/components/PeopleCard";

const MeetOurTeam = () => {
  const sliderRef = useRef(null);

  // 🔹 Auto slide only on mobile
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        slider.scrollBy({
          left: slider.offsetWidth * 0.9,
          behavior: "smooth",
        });

        // reset when end reached
        if (
          slider.scrollLeft + slider.offsetWidth >=
          slider.scrollWidth - 10
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000);
    };

    if (window.innerWidth < 640) {
      startAutoScroll();
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          title="Meet Our Team"
          linkText="View All Stories"
          linkHref="/about"
        />

        <div ref={sliderRef} className={styles.peopleGrid}>
          <div className={styles.peopleItem}>
            <PeopleCard
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              tag="Social Contributor"
              name="Vaishali Yadav"
              title="Running a Library on a Handcart"
              description="Vaishali and her peers push a book-filled handcart through mohallas, turning streets into reading rooms."
            />
          </div>

          <div className={styles.peopleItem}>
            <PeopleCard
              image="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              tag="Youth Achievement"
              name="Imran Siddiqui"
              title="Young Coder Building Apps for Farmers"
              description="Imran develops simple mobile apps that send mandi prices and weather alerts to farmers."
            />
          </div>

          <div className={styles.peopleItem}>
            <PeopleCard
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              tag="Youth Achievement"
              name="Pooja Bundela"
              title="National Medalist in Wrestling"
              description="Training at dawn on village grounds, Pooja recently won a national-level wrestling medal."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MeetOurTeam;
