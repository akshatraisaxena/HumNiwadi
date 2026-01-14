import BreakingNews from "@/components/BreakingNews";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturedStory from "@/components/FeaturedStory";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <Navbar />
        <BreakingNews />
        <HeroSection />
        <FeaturedStory/>
        {children}
        <Footer />
      </body>
    </html> 
  );
}
