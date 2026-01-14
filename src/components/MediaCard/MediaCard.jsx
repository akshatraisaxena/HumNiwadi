import styles from "./MediaCard.module.css";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import MediaCard from "@/components/MediaCard";

const MediaGallery = () => {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          title="Photo & Video Gallery"
          linkText="View Gallery"
          linkHref="/media"
        />

        <div className={styles.mediaGrid}>
          <div className={styles.mediaItem}>
            <MediaCard
              image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              title="Republic Day Celebrations Across Niwadi"
              type="photo"
            />
          </div>

          <div className={styles.mediaItem}>
            <MediaCard
              image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              title="Ground Report: Farmers Speak on Crop Loss"
              type="video"
            />
          </div>

          <div className={styles.mediaItem}>
            <MediaCard
              image="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              title="Temple Fair Draws Thousands of Devotees"
              type="photo"
            />
          </div>

          <div className={styles.mediaItem}>
            <MediaCard
              image="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
              title="Inside a Night Patrol with Local Police"
              type="video"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MediaGallery;
