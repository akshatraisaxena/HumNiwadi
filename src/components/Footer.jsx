import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <div className={styles.brandTitle}>Hum Niwadi</div>
            <p className={styles.brandDesc}>
              Your trusted source for regional news, culture, and stories from
              Niwadi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className={styles.title}>Quick Links</div>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/news" className={styles.link}>News</Link>
            <Link href="/culture" className={styles.link}>Culture</Link>
            <Link href="/media" className={styles.link}>Media Gallery</Link>
          </div>

          {/* Sections */}
          <div>
            <div className={styles.title}>Sections</div>
            <Link href="/history" className={styles.link}>History</Link>
            <Link href="/niwadi-matti" className={styles.link}>Niwadi Maati</Link>
            <Link href="/niwadi-special" className={styles.link}>Niwadi Special</Link>
            <Link href="/e-patrika" className={styles.link}>Niwadi Patrika</Link>
          </div>

          {/* Contact */}
          <div>
            <div className={styles.title}>Contact</div>
            <div className={styles.contactItem}>
              Email: contact@humniwadi.com
            </div>
            <div className={styles.contactItem}>
              Phone: +91 98765 43210
            </div>
            <div className={styles.contactItem}>
              Address: Niwadi, Madhya Pradesh, India
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          © {new Date().getFullYear()} Hum Niwadi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
