import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/News/NewsCard";
import PeopleCard from "@/components/PeopleCard";
import MediaGallery from "@/components/MediaCard/MediaCard";
import PublicVoiceCTA from "@/components/PublicVoiceCTA";
import FeaturedStory from "@/components/FeaturedStory/FeaturedStory";
import HeroSection from "@/components/HeroSection/HeroSection";
import LatestNews from "@/components/LatestNews/LatestNews";
import MeetOurTeam from "@/components/MeetOurTeam/MeetOurTeam";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LatestNews />
      <FeaturedStory />
      {/* Culture & Heritage */}
   <section className="mt-16">
    <Container>
      <SectionHeader
        title="Culture & Heritage"
        linkText="Explore Culture"
        linkHref="/culture"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard
          image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
          category="Festivals"
          date="Jan 2026"
          title="Makar Sankranti Kite Festival Returns to Niwadi Skies"
          excerpt="Colourful kites filled the winter sky as families gathered to celebrate Makar Sankranti."
        />

        <NewsCard
          image="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
          category="Language"
          date="Jan 2026"
          title="School Children Compile Dictionary of Local Expressions"
          excerpt="Students documented Niwadi words and idioms in a community-driven classroom project."
        />

        <NewsCard
          image="https://images.unsplash.com/photo-1494526585095-c41746248156"
          category="Traditions"
          date="Jan 2026"
          title="Storytelling Circles Preserve Tales of Niwadi Rivers"
          excerpt="Elders recount myths and river stories to younger generations through storytelling sessions."
        />
    </div>   
  </Container>
   </section>

   {/* Niwadi Maati */}
   <MeetOurTeam />
{/* Photo & Video */}
<MediaGallery />
{/* <section className="mt-16">
  <Container>
    <SectionHeader
      title="Photo & Video"
      linkText="View Gallery"
      linkHref="/media"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MediaCard
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        title="Republic Day Celebrations Across Niwadi"
        type="photo"
      />

      <MediaCard
        image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
        title="Ground Report: Farmers Speak on Crop Loss"
        type="video"
      />

      <MediaCard
        image="https://images.unsplash.com/photo-1519681393784-d120267933ba"
        title="Temple Fair Draws Thousands of Devotees"
        type="photo"
      />

      <MediaCard
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
        title="Inside a Night Patrol with Local Police"
        type="video"
      />
    </div>
  </Container>
</section> */}
<PublicVoiceCTA />
  </main>
);
}
