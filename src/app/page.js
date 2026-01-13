import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";
import PeopleCard from "@/components/PeopleCard";
import MediaCard from "@/components/MediaCard";
import PublicVoiceCTA from "@/components/PublicVoiceCTA";



export default function HomePage() {
  return (
    <main className="py-8">
      <Container>
        <SectionHeader
          title="Latest News"
          linkText="View All"
          linkHref="/news"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            category="Local News"
            date="Jan 14, 2026"
            title="Tracking Public Spending in Rural Roads Project"
            excerpt="An investigative report following the money trail behind a major rural roads project in Niwadi."
          />

          <NewsCard
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            category="Employment"
            date="Jan 13, 2026"
            title="Job Fair Connects Migrant Workers with Industry"
            excerpt="Hundreds of young job seekers met recruiters at the district-level employment fair."
          />

          <NewsCard
            image="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
            category="Education"
            date="Jan 12, 2026"
            title="Skill Centre Trains Local Youth for Solar Jobs"
            excerpt="A new training programme prepares youth for solar technician roles."
          />
        </div>
      </Container>
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
<section className="mt-16 bg-neutral-50 py-12">
  <Container>
    <SectionHeader
      title="Meet Our Team"
      linkText="View All Stories"
      linkHref="/about"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PeopleCard
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        tag="Social Contributor"
        name="Vaishali Yadav"
        title="Running a Library on a Handcart"
        description="Vaishali and her peers push a book-filled handcart through mohallas, turning streets into reading rooms."
      />

      <PeopleCard
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
        tag="Youth Achievement"
        name="Imran Siddiqui"
        title="Young Coder Building Apps for Farmers"
        description="Imran develops simple mobile apps that send mandi prices and weather alerts to farmers."
      />

      <PeopleCard
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
        tag="Youth Achievement"
        name="Pooja Bundela"
        title="National Medalist in Wrestling"
        description="Training at dawn on village grounds, Pooja recently won a national-level wrestling medal."
      />
    </div>
  </Container>
</section>
{/* Photo & Video */}
<section className="mt-16">
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
</section>
<PublicVoiceCTA />
  </main>
);
}
