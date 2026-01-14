import styles from "./LatestNews.module.css";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";

const LatestNews = () => {
  return (
    <Container>
      <div className={styles.latestNews}>
        <SectionHeader
          title="Latest News"
          linkText="View All"
          linkHref="/news"
        />

        <div className={styles.newsGrid}>
          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              category="Local News"
              date="Jan 14, 2026"
              title="Tracking Public Spending in Rural Roads Project"
              excerpt="An investigative report following the money trail behind a major rural roads project in Niwadi."
            />
          </div>

          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              category="Employment"
              date="Jan 13, 2026"
              title="Job Fair Connects Migrant Workers with Industry"
              excerpt="Hundreds of young job seekers met recruiters at the district-level employment fair."
            />
          </div>

          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              category="Education"
              date="Jan 12, 2026"
              title="Skill Centre Trains Local Youth for Solar Jobs"
              excerpt="A new training programme prepares youth for solar technician roles."
            />
            
          </div>
          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              category="Education"
              date="Jan 12, 2026"
              title="Skill Centre Trains Local Youth for Solar Jobs"
              excerpt="A new training programme prepares youth for solar technician roles."
            />
            
          </div>
          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              category="Education"
              date="Jan 12, 2026"
              title="Skill Centre Trains Local Youth for Solar Jobs"
              excerpt="A new training programme prepares youth for solar technician roles."
            />
            
          </div>
          <div className={styles.newsItem}>
            <NewsCard
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              category="Education"
              date="Jan 12, 2026"
              title="Skill Centre Trains Local Youth for Solar Jobs"
              excerpt="A new training programme prepares youth for solar technician roles."
            />
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LatestNews;
