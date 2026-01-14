import styles from "../styles/BreakingNews.module.css";

export default function BreakingNews() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.label}>
          Breaking:
        </span>

        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            • Road expansion work begins in Niwadi block
            • Power supply restored after 6-hour outage
            • District-level sports meet announced
          </div>
        </div>
      </div>
    </div>
  );
}
