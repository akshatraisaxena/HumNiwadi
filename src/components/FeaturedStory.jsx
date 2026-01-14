import Image from "next/image";
import Link from "next/link";
import styles from "../styles/FeaturedStory.module.css";

export default function FeaturedStory() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/image.png"   
            alt="Today in Niwadi"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div>
          <div className={styles.tag}>
            <span className={styles.star}>★</span>
            Today in Niwadi
          </div>

          <h2 className={styles.title}>
            Today in Niwadi: Local Women’s Collective Opens Community Library
          </h2>

          <p className={styles.description}>
            A self help group of women has converted an abandoned panchayat room
            into a community library featuring books in Bundeli and Hindi.
          </p>

          <Link href="/news/today-in-niwadi" className={styles.readMore}>
            Read Full Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
